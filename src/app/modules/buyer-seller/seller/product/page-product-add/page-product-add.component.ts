import { Component, OnInit } from "@angular/core";
import { FormProductService } from "./../../../../../core/providers/user/form-product.service";
import { Router } from "@angular/router";
import { ProviderStorageService } from "../../../../../core/providers/user/provider-storage.service";

@Component({
  selector: "app-page-product-add",
  templateUrl: "./page-product-add.component.html",
  styleUrls: ["./page-product-add.component.scss"],
})
export class PageProductAddComponent implements OnInit {
  isAddingProductWhichNotOnPortal: boolean = true;
  allFormData: any;
  firstTabFormValue: any;
  secondTabFormValue: any;
  thirdTabFormValue: any;
  fourTabFormValue: any;
  payload: any = {};
  currentTabIndex: number = 0;

  constructor(
    private router: Router,
    private productService: FormProductService,
    private storageService: ProviderStorageService
  ) { }
  // shippingInfoForm(productDetailFrom:productDetailForm){
  //      this.productService.(productDetailForm.value).subscribe(
  //     (res) => {
  //       this.resetFormGroup(productDetailForm);
  //       window.alert('API Success');
  //     },
  //     (err) => {
  //       window.alert('API Error');
  //     }
  //   );
  // }
  ngOnInit() { }

  saveFormData(event): void {
    console.log("event", event);
    if (event) {
      this.allFormData = event.formData;
      if (event.value === "first") {
        this.firstTabFormValue = {
          productBrand: this.allFormData.brandName
            ? this.allFormData.brandName
            : "",
          modelNo: this.allFormData.modelNo ? this.allFormData.modelNo : "",
          productType: this.allFormData.productType
            ? this.allFormData.productType
            : "",
          productName: this.allFormData.productName
            ? this.allFormData.productName
            : "",
          productKeywords: this.allFormData.productKeywords
            ? this.allFormData.productKeywords
            : "",
          placeOfOrigin: this.allFormData.placeOfOrigin
            ? this.allFormData.placeOfOrigin
            : "",
          otherDetailInfo: this.allFormData.otherDetailInfo
            ? this.allFormData.otherDetailInfo
            : "",
          sellerOwnCategorySelect: this.allFormData.sellerOwnCategorySelect
            ? this.allFormData.sellerOwnCategorySelect
            : "",
          sellerOwnCategoryCreate: this.allFormData.sellerOwnCategoryCreate
            ? this.allFormData.sellerOwnCategoryCreate
            : "",
        };
        this.currentTabIndex += 1
      }
      if (event.value === "second") {
        this.secondTabFormValue = {
          productImage: this.allFormData.productImage
            ? this.allFormData.productImage
            : "",
          productVideoLink: this.allFormData.productVideoLink
            ? this.allFormData.productVideoLink
            : "",
          productDescription: this.allFormData.productDescription
            ? this.allFormData.productDescription
            : "",
        };
        this.currentTabIndex += 1
      }
      if (event.value === "third") {
        this.thirdTabFormValue = {
          sellingPriceType: this.allFormData.sellingPriceType
            ? this.allFormData.sellingPriceType
            : "",
          fobPrice: this.allFormData.fobPrice ? this.allFormData.fobPrice : "",
          moq: this.allFormData.moq ? this.allFormData.moq : "",
          fobUnit: this.allFormData.fobUnit ? this.allFormData.fobUnit : "",
          types: this.allFormData.types ? this.allFormData.types : "",
          otherDetailTradeInfo: this.allFormData.otherDetailTradeInfo
            ? this.allFormData.otherDetailTradeInfo
            : "",
          bulkPrice: this.allFormData.bulkPrice ? this.allFormData.bulkPrice : []
        };
        this.currentTabIndex += 1
      }
      if (event.value === "four") {
        this.fourTabFormValue = {
          shipping: this.allFormData.shipping ? this.allFormData.shipping : "",
          shippingPort: this.allFormData.shippingPort
            ? this.allFormData.shippingPort
            : "",
          shippingMode: this.allFormData.shippingMode
            ? this.allFormData.shippingMode
            : "",
          packagingDescription: this.allFormData.packagingDescription
            ? this.allFormData.packagingDescription
            : "",
          customizationAvailable: this.allFormData.customizationAvailable
            ? this.allFormData.customizationAvailable
            : "",
          productPrivateLabeling: this.allFormData.productPrivateLabeling
            ? this.allFormData.productPrivateLabeling
            : "",
        };

        this.payload = {
          ...this.firstTabFormValue,
          ...this.secondTabFormValue,
          ...this.thirdTabFormValue,
          ...this.fourTabFormValue,
          category: localStorage.getItem('selectedCategoryId')
        };
        console.log("payload", this.payload);
        this.productService.addProductDetails(this.payload).subscribe(
          (res) => {
            window.alert("API Success");
            console.log("res", res);
            this.storageService.removeItems(ProviderStorageService.productConstants)
          },
          (err) => {
            window.alert("API Error");
          }
        );
      }
    }
  }

  onTabClick(index) {
    this.currentTabIndex = index
  }
}
