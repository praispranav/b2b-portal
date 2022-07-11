import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ProviderSellerTypeService } from '../../../../../core/providers/seller/provider-seller-type.service';
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
  constructor(private formBuilder: FormBuilder, private providerSellerTypeService: ProviderSellerTypeService) {
    this.sellerTypeForm = this.formBuilder.group({
      checkArray: this.formBuilder.array([])
    })

  }
  get f() {
    return this.sellerTypeForm.controls;
  }
  ngOnInit() {
    this.buildSellerTypeForm();
  }
  buildSellerTypeForm() {
    this.sellerTypeForm = this.formBuilder.group({
      sellerType: ["", [Validators.required]]

    });
  }
  async subSellerTypeForm() {
    this.providerSellerTypeService.addSellerType(this.sellerTypeForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.sellerTypeForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    )

  }
  private resetFormGroup(form: FormGroup) {
    form.reset();
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.sellerTypeForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
