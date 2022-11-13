import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from '../../../../../../core/services/app-message.service';
import { ProviderCompanyProfileService } from "../../../../../../core/providers/user/provider-company-profile.service";
import { ProviderMaterCountryService } from "../../../../../../core/providers/master/provider-mater-country.service";
import { ProviderMaterStateService } from "../../../../../../core/providers/master/provider-mater-state.service";
import { ProviderMaterLocationService } from "../../../../../../core/providers/master/provider-mater-location.service";
@Component({
  selector: "app-form-company-profile",
  templateUrl: "./form-company-profile.component.html",
  styleUrls: ["./form-company-profile.component.scss"],
})
export class FormCompanyProfileComponent implements OnInit {
  isLoading = true;
  isDataExist: boolean;
  idIfDataExist: string;
  companyProfileForm: FormGroup;
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
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
    console.log('ngOnInit')
    this.buildTypeForm();
    // this.onCountrySelected('countrt');
    this.updateDataIfExist();
    this.getCountryList();
    
   
  }

getCountryList(){
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
    this.f.regCountry.setValue(e.target.value);
    this.f.facCountry.setValue(e.target.value);
  
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
    this.f.regState.setValue(e.target.value);

    this.f.facState.setValue(e.target.value);
    this.providerMaterLocationService.getMaterLocationListAll(e.target.value).subscribe(
      (res: any) => {
        this.cities = res.data[0].cities;
        console.log('cities', this.cities)
      },
      (err) => {
        console.log(err)
      }
    );
  }

  onCitySelected(e) {
    console.log("" + e.target.value);
    this.f.regCity.setValue(e.target.value);
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
      regLandline: ['', [Validators.required]],
      regMobile: ['', [Validators.required]],
      isOfficeAddressSame: [''],
      facDivision: [''],
      facArea: [''],
      facCountry: [''],
      facState: [''],
      facAnnualTurnover: [''],
      facContactPerson: [''],
      facLandline: [''],
      facMobile: [''],
      facEmail: [''],
    });
  }

  updateDataIfExist() {
    this.isLoading = true;
    this.providerCompanyProfileService.getCompanyProfileListByFilter(0, 1, { userId: 'pending' }).subscribe(
      (res: any) => {
        this.isDataExist = res.data.length > 0;
        if (!this.isDataExist) {
          return;
        }
        this.idIfDataExist = res.data[0]['_id'];
        this.f.company.setValue(res.data[0].company);
        this.f.tanNo.setValue(res.data[0].tanNo);
        this.f.panNo.setValue(res.data[0].panNo);
        this.f.gstNo.setValue(res.data[0].gstNo);
        this.f.codeOfIE.setValue(res.data[0].codeOfIE);
        this.f.estYear.setValue(res.data[0].estYear);
        this.f.mainCategory.setValue(res.data[0].mainCategory);
        this.f.mainProduct.setValue(res.data[0].mainProduct);
        this.f.regAddress.setValue(res.data[0].regAddress);
        this.f.regCountry.setValue(res.data[0].regCountry);
        this.f.regState.setValue(res.data[0].regState);
        this.f.regCity.setValue(res.data[0].regCity);
        this.f.regLandline.setValue(res.data[0].regLandline);
        this.f.regMobile.setValue(res.data[0].regMobile);
        this.f.isOfficeAddressSame.setValue(res.data[0].isOfficeAddressSame);
        this.f.facDivision.setValue(res.data[0].facDivision);
        this.f.facArea.setValue(res.data[0].facArea);
        this.f.facCountry.setValue(res.data[0].facCountry);
        this.f.facState.setValue(res.data[0].facState);
        this.f.facAnnualTurnover.setValue(res.data[0].facAnnualTurnover);
        this.f.facContactPerson.setValue(res.data[0].facContactPerson);
        this.f.facLandline.setValue(res.data[0].facLandline);
        this.f.facMobile.setValue(res.data[0].facMobile);
        this.f.facEmail.setValue(res.data[0].facEmail);
      },
      (err) => { this.isDataExist = false; },
      () => { this.isLoading = false; }
    );
  }

  async subCompanyProfileForm() {
    if (this.companyProfileForm.invalid) {
      this.markFormGroupTouched(this.companyProfileForm);
      return;
    }
    this.isLoading = true;
    const formValue = this.companyProfileForm.value;
    if (this.isDataExist) {
      formValue._id = this.idIfDataExist;
      this.providerCompanyProfileService.updateCompanyProfile(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Profile Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Profile Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerCompanyProfileService.addCompanyProfile(formValue).subscribe(
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
}
