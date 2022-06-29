import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { ProviderCompanyProfileService } from "../../../../../core/providers/seller/provider-company-profile.service";

@Component({
  selector: "app-form-company-profile",
  templateUrl: "./form-company-profile.component.html",
  styleUrls: ["./form-company-profile.component.scss"],
})
export class FormCompanyProfileComponent implements OnInit {
  companyProfileForm: FormGroup;
  imageList: any[] = [];

  mainCategoryList: any[] = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "tom", label: "Tom" },
  ];

  constructor(private formBuilder: FormBuilder, private providerCompanyProfileService: ProviderCompanyProfileService) { }

  get f() {
    return this.companyProfileForm.controls;
  }

  get mainProductFormArray() {
    return this.companyProfileForm.controls.mainProductFormArray as FormArray;
  }

  ngOnInit() {
    this.buildCompanyProfileForm();
  }

  buildCompanyProfileForm() {
    this.companyProfileForm = this.formBuilder.group({
      companyName: ["", [Validators.required, Validators.minLength(20)]],
      companyTanNo: ["", [Validators.required, Validators.maxLength(20)]],
      companyPanNo: ["", [Validators.required, Validators.maxLength(20)]],
      gstNo: ["", [Validators.required]],
      iecCode: ["", [Validators.required]],
      establishment: ["", [Validators.required]],
      mainCategory: ["", [Validators.required]],
      mainProductFormArray: this.formBuilder.array([]),
      image: ['', [Validators.required]],
      mainsProduct: ["", [Validators.required]],
      country: ["", [Validators.required]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      companyAddr: ["", [Validators.required]],
      registration: ["", [Validators.required]],
      landlineNumber: ["", [Validators.required]],
      mobileNum: ["", [Validators.required]],
      division: [""],
      area: [""],
      regionCountry: [""],
      regionState: [""],
      annualTurnover: [""],
      contactPerson: [""],
      regionPhone: [""],
      regionMobile: [""],
      regionEmail: [""],
    });
  }

  async subCompanyProfileForm() {
    if (this.companyProfileForm.invalid) {
      this.markFormGroupTouched(this.companyProfileForm);
      return;
    }
    if (this.imageList.length > 0) {
      this.f.image.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    this.providerCompanyProfileService.addCompanyProfile(this.companyProfileForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.companyProfileForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );

  }
  async toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  private resetFormGroup(form: FormGroup) {
    form.reset();
    this.imageList = [];


  }
}
