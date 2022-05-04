import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-form-company-profile",
  templateUrl: "./form-company-profile.component.html",
  styleUrls: ["./form-company-profile.component.scss"],
})
export class FormCompanyProfileComponent implements OnInit {
  companyProfileForm: FormGroup;
  mainCategoryList: any[] = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "tom", label: "Tom" },
  ];

  constructor(private formBuilder: FormBuilder) { }

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
      companyName: ["", [Validators.required]],
      companyTanNo: ["", [Validators.required]],
      companyPanNo: ["", [Validators.required]],
      gstNo: ["", [Validators.required]],
      iecCode: ["", [Validators.required]],
      establishment: ["", [Validators.required]],
      mainCategory: ["", [Validators.required]],
      mainProductFormArray: this.formBuilder.array([]),
      mainsProduct: ["", [Validators.required]],
      country: ["", [Validators.required]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      companyAddr: ["", [Validators.required]],
      registration: ["", [Validators.required]],
      landlineNumber: ["", [Validators.required]],
      mobileNum: ["", [Validators.required]],
      division: ["", [Validators.required]],
      area: ["", [Validators.required]],
      regionCountry: ["", [Validators.required]],
      regionState: ["", [Validators.required]],
      anuualTernover: ["", [Validators.required]],
      contactPerson: ["", [Validators.required]],
      regionPhone: ["", [Validators.required]],
      regionMobile: ["", [Validators.required]],
      regionEmail: ["", [Validators.required]],
    });
    this.addMainProduct();
  }

  addMainProduct() {
    const mainProductForm = this.formBuilder.group({
      mainProduct: ["", Validators.required],
    });
    this.mainProductFormArray.push(mainProductForm);
  }

  delMainProduct(mainProductIndex: number) {
    this.mainProductFormArray.removeAt(mainProductIndex);
  }

  subCompanyProfileForm() {
    const formData = this.companyProfileForm.value;
    // API CALL
    console.log(formData);
  }
}
