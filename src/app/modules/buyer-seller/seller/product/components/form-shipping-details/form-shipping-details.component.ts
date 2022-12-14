import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    { mode: "Air Transport", selected: false },
    { mode: "Express Delivery", selected: false },
    { mode: "Land Transportation", selected: false },
    { mode: "Ocen Shipping", selected: false },
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
      shipping: this.formBuilder.array([]),
      shippingPort: ["", [Validators.required]],
      packagingDescription: ["", [Validators.required]],
      customizationAvailable: ["", [Validators.required]],
      productPrivateLabeling: ["", [Validators.required]],
    });
    this.addShippingItem();
  }

  selectShippingMode(index) {
    this.shippingModeList[index].selected =
      !this.shippingModeList[index].selected;
  }

  get shipping() {
    return this.f["shipping"] as FormArray;
  }

  get shippingArr() {
    return this.f["shipping"] as FormArray;
  }

  addShippingItem() {
    if(this.shippingArr.value.length === 4) return
    this.shippingArr.push(
      this.formBuilder.group({
        quantity: [""],
        loadTime: [""],
      })
    );
  }

  async subShippingDetailsForm() {
    let formData = this.shippingDetailsForm.value;
    const shippingModes = [];
    this.shippingModeList.forEach((i)=> shippingModes.push(i.mode))
    
    formData.shippingMode = shippingModes
    let data = {
      formData: formData,
      value: "four",
    };
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
