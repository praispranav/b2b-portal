import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppMessageService } from "../../../../../../core/services/app-message.service";
import { ProviderProductInformationService } from "./../../../../../../core/providers/user/provider-product-information.service";

export type productInfo = {
  productName: string;
  productType: string;
  brandName: string;
  productKeywords: string;
  sellerOwnCategorySelect: string;
  sellerOwnCategoryCreate: string;
  placeOfOrigin: string;
  modelNo: string;
  otherDetails: string;
};
@Component({
  selector: "app-form-product-information",
  templateUrl: "./form-product-information.component.html",
  styleUrls: ["./form-product-information.component.scss"],
})
export class FormProductInformationComponent implements OnInit {
  productInformationForm: FormGroup;
  searchOptions=[
    {label: "Demo", value: "demo"},
    {label: "Test", value: "test"},
    {label: "Dummy", value: "dummy"},
    {label: "Testing", value: "testing"},
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerProductInformationService: ProviderProductInformationService
  ) {}
  @Output() formSubmitData: EventEmitter<any> = new EventEmitter<any>();
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
      productKeywords: ["", [Validators.required]],
      sellerOwnCategorySelect: ["", [Validators.required]],
      sellerOwnCategoryCreate: ["", [Validators.required]],
      placeOfOrigin: ["", [Validators.required]],
      modelNo: ["", [Validators.required]],
      otherDetails: ["", [Validators.required]],
    });
  }

  async subProductInformationForm() {
    if (this.productInformationForm.invalid) {
      this.markFormGroupTouched(this.productInformationForm);
      // return;
    }
    let formData = this.productInformationForm.value;
    let data={
      formData: formData,
      value:'first'
    }
    this.formSubmitData.emit(data);

    // this.providerProductInformationService.addProductInformation(formValue).subscribe(
    //   (res) => { this.appMessageService.createBasicNotification(res.header.status, res.header.message); this.router.navigateByUrl(`/seller/brand-approval/brand-approval-list`); },
    //   (err) => { this.appMessageService.createBasicNotification(err.header.status, err.header.message) }
    // );
  }

  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}
