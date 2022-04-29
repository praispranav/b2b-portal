import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-shipping-details',
  templateUrl: './form-shipping-details.component.html',
  styleUrls: ['./form-shipping-details.component.scss']
})
export class FormShippingDetailsComponent implements OnInit {

  shippingDetailsForm: FormGroup;

  shippingModeList: any[] =
    [
      { mode: "Air Transport" },
      { mode: "Express Delivery" },
      { mode: "Land Transportation" },
      { mode: "Ocen Shipping" },
    ]
  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.shippingDetailsForm.controls;
  }

  ngOnInit() {
    this.buildProductDetails();
  }
  buildProductDetails() {
    this.shippingDetailsForm = this.formBuilder.group({
      quantity: ['', [Validators.required]],
      estLoadTime: ['', [Validators.required]],
      shippingPort: ['', [Validators.required]],
      packagingDescription: ['', [Validators.required]],
      shippingMode: ['', [Validators.required]],
    });
  }

}
