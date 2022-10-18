import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderShippingDetailService } from "../../../../../../core/providers/user/provider-shipping-detail.service";
export type shippingInfo = {
  quantity: string;
  estLoadTime: string;
  shippingPort: string;
  packagingDescription: string;
  shippingMode: string;
  customisationAvailableYes: string;
  customisationAvailableNo: string;
  productPrivateLabellingYes: string;
  productPrivateLabelingNo: string;
};
@Component({
  selector: "app-form-shipping-details",
  templateUrl: "./form-shipping-details.component.html",
  styleUrls: ["./form-shipping-details.component.scss"],
})
export class FormShippingDetailsComponent implements OnInit {
  shippingDetailsForm: FormGroup;

  shippingModeList: any[] = [
    { mode: "Air Transport" },
    { mode: "Express Delivery" },
    { mode: "Land Transportation" },
    { mode: "Ocen Shipping" },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private providerShippingDetailService: ProviderShippingDetailService
  ) {}
  @Output() formSubmitData: EventEmitter<any> = new EventEmitter<any>();
  get f() {
    return this.shippingDetailsForm.controls;
  }

  ngOnInit() {
    this.buildProductDetails();
  }
  buildProductDetails() {
    this.shippingDetailsForm = this.formBuilder.group({
      quantity: ["", [Validators.required]],
      estLoadTime: ["", [Validators.required]],
      shippingPort: ["", [Validators.required]],
      packagingDescription: ["", [Validators.required]],
      shippingMode: ["", [Validators.required]],
      customizationAvailableYes: ["", [Validators.required]],
      customizationAvailableNo: ["", [Validators.required]],
      productPrivateLabelingYes: ["", [Validators.required]],
      productPrivateLabelingNo: ["", [Validators.required]],
    });
  }
  async subShippingDetailsForm() {
    let formData = this.shippingDetailsForm.value;
    let data={
      formData: formData,
      value:'four'
    }
    this.formSubmitData.emit(data);
    // this.providerShippingDetailService.addShippingDetail(this.shippingDetailsForm.value).subscribe(
    //   (res) => {
    //     this.resetFormGroup(this.shippingDetailsForm);
    //     window.alert('API Success');
    //   },
    //   (err) => {
    //     window.alert('API Error');
    //   }
    // );
  }
  private resetFormGroup(form: FormGroup) {
    form.reset();
  }
}
