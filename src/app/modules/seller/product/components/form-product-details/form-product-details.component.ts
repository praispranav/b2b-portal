import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-product-details",
  templateUrl: "./form-product-details.component.html",
  styleUrls: ["./form-product-details.component.scss"],
})
export class FormProductDetailsComponent implements OnInit {
  productDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  handleChange(event) {}

  get f() {
    return this.productDetailsForm.controls;
  }

  ngOnInit() {
    this.buildProductDetails();
  }
  buildProductDetails() {
    this.productDetailsForm = this.formBuilder.group({
      productVideoLink: ["", [Validators.required]],
    });
  }
}
