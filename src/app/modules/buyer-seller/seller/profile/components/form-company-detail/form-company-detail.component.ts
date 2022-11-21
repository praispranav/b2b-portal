import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProviderMaterCountryService } from '../../../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterLocationService } from '../../../../../../core/providers/master/provider-mater-location.service';
import { ProviderMaterStateService } from '../../../../../../core/providers/master/provider-mater-state.service';
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
  formGroup: FormGroup;
  formArray: FormArray = new FormArray([]);
  contactArray: FormArray = new FormArray([]);
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  logoList: any[] = [];
  pictureList: any[] = [];
  tradePicList: any[] = [];
  memberProfiles: any[] = [];
  contactProfiles: any[] = [];
  serviceSubscription: Subscription[] = [];
  options = [
    { value: 'Owner', label: 'Owner' },
    { value: 'CEO', label: 'CEO' },
    { value: 'Founder', label: 'Founder' },
    { value: 'Managing director', label: 'Managing director' },
    { value: 'Director', label: 'Director' },
    { value: 'Managing partner', label: 'Managing partner' },
    { value: 'Proprietor', label: 'Proprietor' },
    { value: 'General manager', label: 'General manager' },
    { value: 'Administrator ', label: 'Administrator' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];
  options1 = [
    { value: 'Saving', label: 'Saving' },
    { value: 'Current', label: 'Current' },
    { value: 'Business', label: 'Business' },

    { value: 'disabled', label: 'Disabled', disabled: true }
  ];
  strengthOptions = [
    { value: '10-20', label: '10-20' },
    { value: '20-50', label: '20-50' },
    { value: '50-100', label: '50-100' },
    { value: '100-200', label: '100-200' },
    { value: '200-500', label: '200-500' },
    { value: '500-1000', label: '500-1000' },
    { value: 'More than 1000', label: 'More than 1000' },

    { value: 'disabled', label: 'Disabled', disabled: true }
  ];
  contactPersonDesignation;
  accType;
  languageOptions = [
    { value: 'Hindi', label: 'Hindi' },
    { value: 'English', label: 'English' },
    { value: 'Marathi', label: 'Marathi' },
    { value: 'Tamil', label: 'Tamil' }

  ];
  companyLanguageSpoken = ['Hindi', 'English'];
  constructor(
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerCompanyDetailService: ProviderCompanyDetailService,
    private providerMaterCountryService: ProviderMaterCountryService,
    private providerMaterStateService: ProviderMaterStateService,
    private providerMaterLocationService: ProviderMaterLocationService
  ) { }

  get f() {
    return this.companyDetailForm.controls;
  }

  ngOnInit() {
    this.buildTypeForm();
    this.addNew("");
    this.addNewContact("");
    this.updateDataIfExist();
    this.getCountryList();
    this.serviceSubscription.push(
      this.formArray.valueChanges.pipe().subscribe(() => {
        this.memberProfiles = this.formArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );
    this.serviceSubscription.push(
      this.contactArray.valueChanges.pipe().subscribe(() => {
        this.contactProfiles = this.contactArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );

  }
  getCountryList() {
    this.providerMaterCountryService.getMaterCountryList().subscribe(
      (res: any) => {

        this.countries = res.data;
        console.log('country', this.countries)
      },
      (err) => {
        console.log(err)
      }
    );
  }
  onCountrySelected(e) {
    console.log("" + e.target.value);
    // this.f.regCountry?.setValue(e.target.value);
    // this.f.facCountry?.setValue(e.target.value);

    this.providerMaterStateService.getMaterStateListAll(e.target.value).subscribe(
      (res: any) => {
        this.states = res.data[0].states;
        console.log('state', this.states)
      },
      (err) => {
        console.log(err)
      }
    );
  }
  onStateSelected(e) {
    console.log("" + e.target.value);
    // this.f.regState.setValue(e.target.value);

    // this.f.facState.setValue(e.target.value);
    this.providerMaterLocationService.getMaterLocationListAll(e.target.value).subscribe(
      (res: any) => {
        console.log('cities', res)
        this.cities = res.data[0].cities ? res.data[0].cities : [];
      },
      (err) => {
        console.log(err)
      }
    );
  }
  onCitySelected(e) {
    console.log("" + e.target.value);
    // this.f.regCity.setValue(e.target.value);
  }
  buildTypeForm() {
    this.companyDetailForm = this.formBuilder.group({
      companyLogo: [""],
      companyPicture: [""],
      companyVideo: [""],
      contactPersonAlternateEmail: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      companyWebsite: ["", [Validators.required]],
      googleBusiness: ["", [Validators.required]],
      facebookBusiness: ["", [Validators.required]],
      instagramBusiness: ["", [Validators.required]],
      accNumber: ["", [Validators.required]],
      accType: ["", [Validators.required]],
      accIFSCCode: ["", [Validators.required, Validators.maxLength(11)]],
      accSwiftCode: ["", [Validators.required]],
      accBranch: ["", [Validators.required]],
      accBankName: ["", [Validators.required]],
      companyLanguageSpoken: ["", [Validators.required]],
      companyVision: ["", [Validators.required]],
      companyDetail: ["", [Validators.required]],
      companyPhilosophy: ["", [Validators.required]],
      employeeStrength: ["", [Validators.required]],
      companyPage: ["", [Validators.required]],
    });
  }
  addNewContact(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      contactPersonFirstName: [data.contactPersonFirstName ? data.contactPersonFirstName : "", [Validators.required]],
      contactPersonLastName: [data.contactPersonLastName ? data.contactPersonLastName : "", [Validators.required]],
      contactPersonDesignation: [data.contactPersonDesignation ? data.contactPersonDesignation : "", [Validators.required]],
      contactPersonEmail: [data.contactPersonEmail ? data.contactPersonEmail : "", [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],

    });
    this.contactArray.push(this.formGroup);

  }
  addNew(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      tradeName: [data.tradeName ? data.tradeName : ""],
      tradeStartDate: [data.tradeStartDate ? data.tradeStartDate : ""],
      tradeEndDate: [data.tradeEndDate ? data.tradeEndDate : ""],
      tradeHost: [data.tradeHost ? data.tradeHost : ""],
      tradeCountry: [data.tradeCountry ? data.tradeCountry : ""],
      tradeState: [data.tradeState ? data.tradeState : ""],
      tradeCity: [data.tradeCity ? data.tradeCity : ""],
      tradeInfo: [data.tradeInfo ? data.tradeInfo : ""],
      tradePicture: [data.tradePicture ? data.tradePicture : ""],
    });
    this.formArray.push(this.formGroup);
  }

  // get formArr() {
  //   return this.companyDetailForm.get('itemRows') as FormArray;
  // }

  removeAt(index: number): void {
    this.formArray.removeAt(index);
  }
  removeContact(index: number): void {
    this.contactArray.removeAt(index);
  }
  updateDataIfExist() {
    this.isLoading = true;
    this.providerCompanyDetailService.getCompanyDetailListByFilter(0, 1, { userId: 'pending' }).subscribe(
      (res: any) => {
        let patchFormvalue: any = res.data[0];
        this.isDataExist = res.data.length > 0;
        if (!this.isDataExist) {
          return;
        }
        this.idIfDataExist = patchFormvalue['_id'];
        this.companyDetailForm.patchValue({
          contactPersonAlternateEmail: patchFormvalue.contactPersonAlternateEmail ? patchFormvalue.contactPersonAlternateEmail : '',
          companyWebsite: patchFormvalue.companyWebsite ? patchFormvalue.companyWebsite : '',
          googleBusiness: patchFormvalue.googleBusiness ? patchFormvalue.googleBusiness : '',
          facebookBusiness: patchFormvalue.facebookBusiness ? patchFormvalue.facebookBusiness : '',
          instagramBusiness: patchFormvalue.instagramBusiness ? patchFormvalue.instagramBusiness : '',
          accNumber: patchFormvalue.accNumber ? patchFormvalue.accNumber : '',
          accType: patchFormvalue.accType ? patchFormvalue.accType : '',
          accIFSCCode: patchFormvalue.accIFSCCode ? patchFormvalue.accIFSCCode : '',
          accSwiftCode: patchFormvalue.accSwiftCode ? patchFormvalue.accSwiftCode : '',
          accBranch: patchFormvalue.accBranch ? patchFormvalue.accBranch : '',
          accBankName: patchFormvalue.accBankName ? patchFormvalue.accBankName : '',
          companyLanguageSpoken: patchFormvalue.companyLanguageSpoken ? patchFormvalue.companyLanguageSpoken : '',
          companyVision: patchFormvalue.companyVision ? patchFormvalue.companyVision : '',
          companyDetail: patchFormvalue.companyDetail ? patchFormvalue.companyDetail : '',
          companyPhilosophy: patchFormvalue.companyPhilosophy ? patchFormvalue.companyPhilosophy : '',
        })
        patchFormvalue.tradeShow.forEach(element => {
          this.addNew(element);
        })
        patchFormvalue.contactPerson.forEach(element => {
          this.addNewContact(element);
        })
      },
      (err) => { this.isDataExist = false; },
      () => { this.isLoading = false; }
    );
  }

  async subCompanyDetailForm() {
    if (!this.companyDetailForm.valid) {
      this.markFormGroupTouched(this.companyDetailForm);
      return;
    }
    if (this.logoList.length > 0) {
      this.f.companyLogo.setValue(
        await this.toBase64(this.logoList[0].originFileObj)
      );
    }
    if (this.pictureList.length > 0) {
      this.f.companyPicture.setValue(
        await this.toBase64(this.pictureList[0].originFileObj)
      );
    }
    if (this.tradePicList.length > 0) {
      this.f.tradePicture.setValue(
        await this.toBase64(this.pictureList[0].originFileObj)
      );
    }
    this.isLoading = true;


    const formData = this.companyDetailForm.value;
    let reqObj = {
      contactPersonAlternateEmail: formData.contactPersonAlternateEmail ? formData.contactPersonAlternateEmail : '',
      companyWebsite: formData.companyWebsite ? formData.companyWebsite : '',
      googleBusiness: formData.googleBusiness ? formData.googleBusiness : '',
      facebookBusiness: formData.facebookBusiness ? formData.facebookBusiness : '',
      instagramBusiness: formData.instagramBusiness ? formData.instagramBusiness : '',
      accNumber: formData.accNumber ? formData.accNumber : '',
      accType: formData.accType ? formData.accType : '',
      accIFSCCode: formData.accIFSCCode ? formData.accIFSCCode : '',
      accSwiftCode: formData.accSwiftCode ? formData.accSwiftCode : '',
      accBranch: formData.accBranch ? formData.accBranch : '',
      accBankName: formData.accBankName ? formData.accBankName : '',
      companyLanguageSpoken: formData.companyLanguageSpoken ? formData.companyLanguageSpoken : '',
      companyVision: formData.companyVision ? formData.companyVision : '',
      companyDetail: formData.companyDetail ? formData.companyDetail : '',
      companyPhilosophy: formData.companyPhilosophy ? formData.companyPhilosophy : '',
      companyPage: formData.companyPage ? formData.companyPage : '',
      tradeShow: [...this.memberProfiles],
      contactPerson: [...this.contactProfiles],
    }
    console.log('reqData', reqObj);

    if (this.isDataExist) {
      formData._id = this.idIfDataExist;
      this.providerCompanyDetailService.updateCompanyDetail(reqObj).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Detail Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Detail Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerCompanyDetailService.addCompanyDetail(reqObj).subscribe(
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
  async toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
