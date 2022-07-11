import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderProductDetailsService } from "../../../../../core/providers/seller/provider-product-details.service";

@Component({
  selector: "app-form-product-details",
  templateUrl: "./form-product-details.component.html",
  styleUrls: ["./form-product-details.component.scss"],
})
export class FormProductDetailsComponent implements OnInit {
  productDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private providerProductDetailsService: ProviderProductDetailsService) { }

  handleChange(event) { }

  get f() {
    return this.productDetailsForm.controls;
  }

  ngOnInit() {
    this.buildProductDetails();
  }
  buildProductDetails() {
    this.productDetailsForm = this.formBuilder.group({
      productVideoLink: ["", [Validators.required]],
      image: ["", [Validators.required]],
      productDescription: ["", [Validators.required]],
    });
  }
  async subProductDetailsForm() {
    this.providerProductDetailsService.addProductDetails(this.productDetailsForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.productDetailsForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }

  private resetFormGroup(form: FormGroup) {
    form.reset();

  }
}
