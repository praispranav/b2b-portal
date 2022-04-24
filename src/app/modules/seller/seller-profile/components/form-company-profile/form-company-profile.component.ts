import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-company-profile",
  templateUrl: "./form-company-profile.component.html",
  styleUrls: ["./form-company-profile.component.scss"],
})
export class FormCompanyProfileComponent implements OnInit {
  companyProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.companyProfileForm.controls;
  }

  ngOnInit() {
    this.buildCompanyProfileForm();
  }

  buildCompanyProfileForm() {
    this.companyProfileForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      companyTanNo: ['', [Validators.required]],
      companyPanNo: ['', [Validators.required]],
      gstNo: ['', [Validators.required]],
      iecCode: ['', [Validators.required]],
      establishment: ['', [Validators.required]],
      mainCategory: ['', [Validators.required]],
      mainProduct: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      companyAddr: ['', [Validators.required]],
      registration: ['', [Validators.required]],
      landlineNumber: ['', [Validators.required]],
      mobileNum: ['', [Validators.required]],
      division: ['', [Validators.required]],
      area: ['', [Validators.required]],
      regionCountry: ['', [Validators.required]],
      regionState: ['', [Validators.required]],
      anuualTernover: ['', [Validators.required]],
      contactPerson: ['', [Validators.required]],
      regionPhone: ['', [Validators.required]],
      regionMobile: ['', [Validators.required]],
      regionEmail: ['', [Validators.required]],


    });
  }

  subCompanyProfileForm() {
    const formData = this.companyProfileForm.value;
    // API CALL
    console.log(formData);
  }
}
