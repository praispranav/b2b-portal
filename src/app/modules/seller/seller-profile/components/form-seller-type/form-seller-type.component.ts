import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-form-seller-type',
  templateUrl: './form-seller-type.component.html',
  styleUrls: ['./form-seller-type.component.scss']
})
export class FormSellerTypeComponent implements OnInit {
  sellerTypeForm: FormGroup;
  sellerTypeList: any[] = [
    { name: "Distributor", value: "Distributor" },
    { name: "Government Unit", value: "Government Unit" },
    { name: "Manufacturer", value: "Manufacturer" },
    { name: "Association", value: "Association" },
    { name: "Exporter", value: "Exporter" },
    { name: "Retailer", value: "Retailer" },
    { name: "Trader", value: "Trader" },
    { name: "Producer", value: "Producer" },
    { name: "Retailer", value: "Retailer" },
    { name: "Wholeseller", value: "Wholeseller" },
    { name: "NGO", value: "NGO" },
    { name: "Individual Buyer", value: "Individual Buyer" },
    { name: "Wholeseller", value: "Wholeseller" },
    { name: "Company Buyer", value: "Company Buyer" },
    { name: "Buying House", value: "Buying House" },
    { name: "Distribution", value: "Distribution" },
    { name: "Other", value: "Other" }

  ]
  constructor(private formBuilder: FormBuilder) { }
  get f() {
    return this.sellerTypeForm.controls;
  }
  ngOnInit() {
    this.buildSellerTypeForm();
  }
  buildSellerTypeForm() {
    this.sellerTypeForm = this.formBuilder.group({
      // processName: [""],
      // processpicture: [""],
      // description: [""],
      // selectNo: [""],
      // selectYes: [""],
    });
  }
}
