import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderShippingDetailService } from "../../../../../../core/providers/user/provider-shipping-detail.service";
export type shippingInfo= {quantity:string,estLoadTime:string,shippingPort:string,packagingDescription:string,shippingMode:string,customisationAvailableYes:string,customisationAvailableNo:string,productPrivateLabellingYes:string,productPrivateLabellingNo:string}
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
  constructor(private formBuilder: FormBuilder, private providerShippingDetailService: ProviderShippingDetailService) { }
  @Output()shippingInfo=new EventEmitter<shippingInfo>()
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
      customisationAvailableYes: ["", [Validators.required]],
      customisationAvailableNo: ["", [Validators.required]],
      productPrivateLabellingYes: ["", [Validators.required]],
      productPrivateLabellingNo: ["", [Validators.required]],
    });
  }
  async subShippingDetailsForm() {
    this.shippingInfo.emit(this.shippingDetailsForm.value);
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
