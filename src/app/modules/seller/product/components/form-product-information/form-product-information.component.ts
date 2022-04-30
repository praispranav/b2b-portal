import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-product-information",
  templateUrl: "./form-product-information.component.html",
  styleUrls: ["./form-product-information.component.scss"],
})
export class FormProductInformationComponent implements OnInit {
  productInformationForm: FormGroup;
  searchOptions = [
    { value: "jack", label: "Jack", disabled: false },
    { value: "lucy", label: "Lucy", disabled: false },
    { value: "tom", label: "Tom", disabled: false },
  ];

  constructor(private formBuilder: FormBuilder) {}

  get f() {
    return this.productInformationForm.controls;
  }

  ngOnInit() {
    this.buildProductInformationForm();
  }

  buildProductInformationForm() {
    this.productInformationForm = this.formBuilder.group({
      productName: ["", [Validators.required]],
      productType: ["", [Validators.required]],
      brandName: ["", [Validators.required]],
      productkeywords: ["", [Validators.required]],
      sellerOwnCategorySelect: ["", [Validators.required]],
      sellerOwnCategoryCreate: ["", [Validators.required]],
      placeOfOrigin: ["", [Validators.required]],
      modelNo: ["", [Validators.required]],
      otherDetails: ["", [Validators.required]],

      productXyz: ["", [Validators.required]],
      productAbc: ["", [Validators.required]],
      productCategory: ["", [Validators.required]],
    });
  }
}
