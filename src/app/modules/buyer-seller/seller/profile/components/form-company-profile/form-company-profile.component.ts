import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from '../../../../../../core/services/app-message.service';
import { ProviderCompanyProfileService } from "../../../../../../core/providers/user/provider-company-profile.service";
import { ProviderMaterCountryService } from "../../../../../../core/providers/master/provider-mater-country.service";
import { ProviderMaterStateService } from "../../../../../../core/providers/master/provider-mater-state.service";
import { ProviderMaterLocationService } from "../../../../../../core/providers/master/provider-mater-location.service";
import { element } from 'protractor';
@Component({
  selector: "app-form-company-profile",
  templateUrl: "./form-company-profile.component.html",
  styleUrls: ["./form-company-profile.component.scss"],
})
export class FormCompanyProfileComponent implements OnInit {
  isLoading = true;
  isDataExist: boolean;
  idIfDataExist: string;
  file: File;
  fileType: any | string;
  fileName: string = '';
  imageBase64: string | any = "";
  companyProfileForm: FormGroup;
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  additionalArray: FormArray = new FormArray([]);
  additionalProfiles: any[] = [];
  formGroup: FormGroup;
  mobileArray: FormArray = new FormArray([]);
  landlineArray: FormArray = new FormArray([]);
  mobileProfiles: any[] = [];
  landlineProfiles: any[] = [];
  serviceSubscription: Subscription[] = [];

  categoryOptions = [
    { value: 'Apparel', label: 'Apparel' },
    { value: 'Cloth', label: 'Cloth' },
    { value: 'Shoes', label: 'Shoes' },
    { value: 'disabled', label: 'Disabled', disabled: true }


  ];
  productOptions = [
    { value: 'product1', label: 'product1' },
    { value: 'product2', label: 'product2' },
    { value: 'product3', label: 'product3' },
    { value: 'product4', label: 'product4' },
    { value: 'product5', label: 'product5' },
    { value: 'product6', label: 'product6' }
  ];
  mainProduct = ['Product1', 'Product2'];
  divisions = [
    { value: 'Branch', label: 'Branch' },
    { value: 'Network', label: 'Network' },
    { value: 'Factory', label: 'Factory' },
    { value: 'International Office', label: 'International Office' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Showroom', label: 'Showroom ' },
    { value: 'Sister Concern', label: 'Sister Concern' },
    { value: 'Trading Division', label: 'Trading Division' },
    { value: 'Warehouse ', label: 'Warehouse' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];
  constructor(
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerCompanyProfileService: ProviderCompanyProfileService,
    private providerMaterCountryService: ProviderMaterCountryService,
    private providerMaterStateService: ProviderMaterStateService,
    private providerMaterLocationService: ProviderMaterLocationService

  ) { }

  get f() {
    return this.companyProfileForm.controls;
  }

  ngOnInit() {
    this.buildTypeForm();
    // this.onCountrySelected('countrt');
    this.addNewAdditional("");
    this.addNewMobile("");
    this.addNewLandline("");
    this.updateDataIfExist();
    this.getCountryList();
    this.serviceSubscription.push(
      this.additionalArray.valueChanges.pipe().subscribe(() => {
        this.additionalProfiles = this.additionalArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );
    this.serviceSubscription.push(
      this.mobileArray.valueChanges.pipe().subscribe(() => {
        this.mobileProfiles = this.mobileArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );
    this.serviceSubscription.push(
      this.landlineArray.valueChanges.pipe().subscribe(() => {
        this.landlineProfiles = this.landlineArray.controls
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
    this.companyProfileForm = this.formBuilder.group({
      company: ["", [Validators.required, Validators.minLength(20)]],
      tanNo: ["", [Validators.required, Validators.maxLength(20)]],
      panNo: ["", [Validators.required, Validators.maxLength(20)]],
      gstNo: ["", [Validators.required, Validators.maxLength(20)]],
      codeOfIE: ["", [Validators.required]],
      estYear: ["", [Validators.required]],
      mainCategory: ["", [Validators.required]],
      mainProduct: ["", [Validators.required]],
      regAddress: ['', [Validators.required]],
      regCountry: ['', [Validators.required]],
      regState: ['', [Validators.required]],
      regCity: ['', [Validators.required]],
      businessCertificate: [''],

    });
  }
  addNewMobile(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      regMobile: [data.regMobile ? data.regMobile : ""],

    });
    this.mobileArray.push(this.formGroup);
  }

  deleteMobile(index: number): void {
    this.mobileArray.removeAt(index);
  }
  addNewLandline(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      regLandline: [data.regLandline ? data.regLandline : ""],

    });
    this.landlineArray.push(this.formGroup);
  }

  deleteLandline(index: number): void {
    this.landlineArray.removeAt(index);
  }
  addNewAdditional(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      facDivision: [data.facDivision ? data.facDivision : ""],
      facArea: [data.facArea ? data.facArea : ""],
      facCountry: [data.facCountry ? data.facCountry : ""],
      facState: [data.facState ? data.facState : ""],
      facAnnualTurnover: [data.facAnnualTurnover ? data.facAnnualTurnover : ""],
      facContactPerson: [data.facContactPerson ? data.facContactPerson : ""],
      facLandline: [data.facLandline ? data.facLandline : ""],
      facMobile: [data.facMobile ? data.facMobile : ""],
      facEmail: [data.facEmail ? data.facEmail : ""],
    });
    this.additionalArray.push(this.formGroup);
  }
  removeAdditional(index: number): void {
    this.additionalArray.removeAt(index);
  }
  updateDataIfExist() {
    this.isLoading = true;
    this.providerCompanyProfileService.getCompanyProfileListByFilter(0, 1, { userId: 'pending' }).subscribe(
      (res: any) => {
        let patchFormvalue: any = res.data[0];

        this.isDataExist = res.data.length > 0;
        if (!this.isDataExist) {
          return;
        }
        this.idIfDataExist = patchFormvalue['_id'];
        this.companyProfileForm.patchValue({

          gstNo: patchFormvalue.gstNo ? patchFormvalue.gstNo : '',
          company: patchFormvalue.company ? patchFormvalue.company : '',
          codeOfIE: patchFormvalue.codeOfIE ? patchFormvalue.codeOfIE : '',
          panNo: patchFormvalue.panNo ? patchFormvalue.panNo : '',
          estYear: patchFormvalue.estYear ? patchFormvalue.accNumber : '',
          mainCategory: patchFormvalue.mainCategory ? patchFormvalue.mainCategory : '',
          mainProduct: patchFormvalue.mainProduct ? patchFormvalue.mainProduct : '',
          tanNo: patchFormvalue.tanNo ? patchFormvalue.tanNo : '',
          regAddress: patchFormvalue.regAddress ? patchFormvalue.regAddress : '',
          regCountry: patchFormvalue.regCountry ? patchFormvalue.regCountry : '',
          regState: patchFormvalue.regState ? patchFormvalue.regState : '',
          regCity: patchFormvalue.regCity ? patchFormvalue.regCity : '',
          businessCertificate: patchFormvalue.businessCertificate ? patchFormvalue.businessCertificate : '',

        })
        patchFormvalue.additionalDetail.forEach(element => {
          this.addNewAdditional(element);
        })
        patchFormvalue.additionalMobile.forEach(element => {
          this.addNewMobile(element);
        })
        patchFormvalue.additionalLandline.forEach(element => {
          this.addNewLandline(element);
        })
      },
      (err) => { this.isDataExist = false; },
      () => { this.isLoading = false; }
    )
  }

  async subCompanyProfileForm() {
    if (!this.companyProfileForm.invalid) {
      this.markFormGroupTouched(this.companyProfileForm);
      return;
    }
    this.isLoading = true;
    const formData = this.companyProfileForm.value;
    let reqObj = {

      gstNo: formData.gstNo ? formData.gstNo : '',
      company: formData.company ? formData.company : '',
      codeOfIE: formData.codeOfIE ? formData.codeOfIE : '',
      panNo: formData.panNo ? formData.panNo : '',
      estYear: formData.estYear ? formData.estYear : '',
      mainCategory: formData.mainCategory ? formData.mainCategory : '',
      mainProduct: formData.mainProduct ? formData.mainProduct : '',
      tanNo: formData.tanNo ? formData.tanNo : '',
      regAddress: formData.regAddress ? formData.regAddress : '',
      regCountry: formData.regCountry ? formData.regCountry : '',
      regState: formData.regState ? formData.regState : '',
      regCity: formData.regCity ? formData.regCity : '',
      businessCertificate: formData.businessCertificate ? formData.businessCertificate : '',
      additionalDetail: [...this.additionalProfiles],
      additionalMobile: [...this.mobileProfiles],
      additionalLandline: [...this.landlineProfiles],
    }
    console.log('reqData', reqObj);

    if (this.isDataExist) {
      formData._id = this.idIfDataExist;
      this.providerCompanyProfileService.updateCompanyProfile(reqObj).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Profile Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Profile Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerCompanyProfileService.addCompanyProfile(reqObj).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Profile Added Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Profile Not Added") },
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
  changeListener($event): void {
    this.file = $event.target.files[0];
  }

  fileUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageBase64 = reader.result;
      this.companyProfileForm.patchValue({ imageUrl: reader.result as string })
      this.fileType = file.type;
      this.fileName = file.name
    }
  }
}
