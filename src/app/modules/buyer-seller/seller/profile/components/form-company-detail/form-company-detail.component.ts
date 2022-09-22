import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from '../../../../../../core/services/app-message.service';
import { ProviderCompanyDetailService } from './../../../../../../core/providers/user/provider-company-detail.service';

@Component({
  selector: "app-form-company-detail",
  templateUrl: "./form-company-detail.component.html",
  styleUrls: ["./form-company-detail.component.scss"],
})
export class FormCompanyDetailComponent implements OnInit {
  isLoading = true;
  isDataExist: boolean;
  idIfDataExist: string;
  companyDetailForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerCompanyDetailService: ProviderCompanyDetailService
  ) { }

  get f() {
    return this.companyDetailForm.controls;
  }

  ngOnInit() {
    this.buildTypeForm();
    this.updateDataIfExist();
  }

  buildTypeForm() {
    this.companyDetailForm = this.formBuilder.group({
      contactPersonFirstName: ["", [Validators.required]],
      contactPersonLastName: ["", [Validators.required]],
      contactPersonDesignation: ["", [Validators.required]],
      contactPersonEmail: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      contactPersonAlternateEmail: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      companyWebsite: ["", [Validators.required]],
      googleBusiness: ["", [Validators.required]],
      facebookBusiness: ["", [Validators.required]],
      instagramBusiness: ["", [Validators.required]],
      accNumber: ["", [Validators.required]],
      accType: ["", [Validators.required]],
      accIFSCCode: ["", [Validators.required]],
      accSwiftCode: ["", [Validators.required]],
      accBranch: ["", [Validators.required]],
      accBankName: ["", [Validators.required]],
      companyLanguageSpoken: ["", [Validators.required]],
      companyVision: ["", [Validators.required]],
      companyDetail: ["", [Validators.required]],
      companyPhilosophy: ["", [Validators.required]],
      tradeName: [""],
      tradeStartDate: [""],
      tradeEndDate: [""],
      tradeHost: [""],
      tradeRegion: [""],
      tradeCity: [""],
      tradeInfo: [""]
    });
  }

  updateDataIfExist() {
    this.isLoading = true;
    this.providerCompanyDetailService.getCompanyDetailListByFilter(0, 1, { userId: 'pending' }).subscribe(
      (res: any) => {
        this.isDataExist = res.data.length > 0;
        if (!this.isDataExist) {
          return;
        }
        this.idIfDataExist = res.data[0]['_id'];
        this.f.contactPersonFirstName.setValue(res.data[0].contactPersonFirstName);
        this.f.contactPersonLastName.setValue(res.data[0].contactPersonLastName);
        this.f.contactPersonDesignation.setValue(res.data[0].contactPersonDesignation);
        this.f.contactPersonEmail.setValue(res.data[0].contactPersonEmail);
        this.f.contactPersonAlternateEmail.setValue(res.data[0].contactPersonAlternateEmail);
        this.f.companyWebsite.setValue(res.data[0].companyWebsite);
        this.f.googleBusiness.setValue(res.data[0].googleBusiness);
        this.f.facebookBusiness.setValue(res.data[0].facebookBusiness);
        this.f.instagramBusiness.setValue(res.data[0].instagramBusiness);
        this.f.accNumber.setValue(res.data[0].accNumber);
        this.f.accType.setValue(res.data[0].accType);
        this.f.accIFSCCode.setValue(res.data[0].accIFSCCode);
        this.f.accSwiftCode.setValue(res.data[0].accSwiftCode);
        this.f.accBranch.setValue(res.data[0].accBranch);
        this.f.accBankName.setValue(res.data[0].accBankName);
        this.f.companyLanguageSpoken.setValue(res.data[0].companyLanguageSpoken);
        this.f.companyVision.setValue(res.data[0].companyVision);
        this.f.companyDetail.setValue(res.data[0].companyDetail);
        this.f.companyPhilosophy.setValue(res.data[0].companyPhilosophy);
        this.f.tradeName.setValue(res.data[0].tradeName);
        this.f.tradeStartDate.setValue(res.data[0].tradeStartDate);
        this.f.tradeEndDate.setValue(res.data[0].tradeEndDate);
        this.f.tradeHost.setValue(res.data[0].tradeHost);
        this.f.tradeRegion.setValue(res.data[0].tradeRegion);
        this.f.tradeCity.setValue(res.data[0].tradeCity);
        this.f.tradeInfo.setValue(res.data[0].tradeInfo);
      },
      (err) => { this.isDataExist = false; },
      () => { this.isLoading = false; }
    );
  }

  async subCompanyDetailForm() {
    if (this.companyDetailForm.invalid) {
      this.markFormGroupTouched(this.companyDetailForm);
      return;
    }
    this.isLoading = true;
    const formValue = this.companyDetailForm.value;
    if (this.isDataExist) {
      formValue._id = this.idIfDataExist;
      this.providerCompanyDetailService.updateCompanyDetail(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Detail Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Detail Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerCompanyDetailService.addCompanyDetail(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Detail Added Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Detail Not Added") },
        () => { this.isLoading = false; }
      );
    }
  }

  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}
