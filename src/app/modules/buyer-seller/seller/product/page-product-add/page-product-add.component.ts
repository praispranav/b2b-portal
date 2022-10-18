import { Component, OnInit } from "@angular/core";
import { FormProductService } from "./../../../../../core/providers/user/form-product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-page-product-add",
  templateUrl: "./page-product-add.component.html",
  styleUrls: ["./page-product-add.component.scss"],
})
export class PageProductAddComponent implements OnInit {
  isAddingProductWhichNotOnPortal: boolean = false;
  allFormData: any;
  firstTabFormValue: any;
  secondTabFormValue: any;
  thirdTabFormValue: any;
  fourTabFormValue: any;
  payload: any = {};

  constructor(
    private router: Router,
    private productService: FormProductService
  ) {}
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
  ngOnInit() {}
  saveFormData(event): void {
    console.log("event", event);
    if (event) {
      this.allFormData = event.formData;
      if (event.value === "first") {
        this.firstTabFormValue = {
          productBrand: this.allFormData.brandName? this.allFormData.brandName: "",
          modelNo: this.allFormData.modelNo ? this.allFormData.modelNo : "",
          productType: this.allFormData.productType ? this.allFormData.productType : "",
          productName: this.allFormData.productName? this.allFormData.productName: "",
          productKeywords: this.allFormData.productKeywords? this.allFormData.productKeywords: "",
          placeOfOrigin: this.allFormData.placeOfOrigin? this.allFormData.placeOfOrigin: "",
          otherDetails: this.allFormData.otherDetails? this.allFormData.otherDetails: "",
          sellerOwnCategorySelect: this.allFormData.sellerOwnCategorySelect? this.allFormData.sellerOwnCategorySelect: "",
          sellerOwnCategoryCreate: this.allFormData.sellerOwnCategoryCreate?this.allFormData.sellerOwnCategoryCreate:'',
        };
      }
      if (event.value === "second") {
        this.secondTabFormValue = {
          productImage: this.allFormData.productImage?this.allFormData.productImage:'',
          productVideoLink:this.allFormData.productVideoLink?this.allFormData.productVideoLink:'',
          productDescription:this.allFormData.productDescription?this.allFormData.productDescription:''
        };
      }
      if (event.value === "third") {
        this.thirdTabFormValue = {
          quantity: this.allFormData.quantity?this.allFormData.quantity:'',
          estLoadTime:this.allFormData.estLoadTime?this.allFormData.estLoadTime:'',
          shippingPort:this.allFormData.shippingPort?this.allFormData.shippingPort:'',
          shippingMode:this.allFormData.shippingMode?this.allFormData.shippingMode:'',
          packagingDescription:this.allFormData.packagingDescription?this.allFormData.packagingDescription:'',
          customisationAvailableYes:this.allFormData.customizationAvailableYes?this.allFormData.customizationAvailableYes:'',
          customisationAvailableNo:this.allFormData.customizationAvailableNo?this.allFormData.customizationAvailableNo:'',
          productPrivateLabellingYes:this.allFormData.productPrivateLabelingYes?this.allFormData.productPrivateLabelingYes:'',
          productPrivateLabellingNo:this.allFormData.productPrivateLabelingNo?this.allFormData.productPrivateLabelingNo:'',


        };
      }
      if (event.value === "four") {
        this.fourTabFormValue = {
          sellingPrice: this.allFormData.sellingPrice?this.allFormData.sellingPrice:'',
          unit:this.allFormData.unit?this.allFormData.unit:'',
          moq:this.allFormData.moq?this.allFormData.moq:'',
          fobUnit:this.allFormData.fobUnit?this.allFormData.fobUnit:'',
          fobPriceUnit:this.allFormData.fobPriceUnit?this.allFormData.fobPriceUnit:'',
          moqPerUnit:this.allFormData.moqPerUnit?this.allFormData.moqPerUnit:'',
          paymentType:this.allFormData.paymentType?this.allFormData.paymentType:'',
          timestamp:this.allFormData.timestamp?this.allFormData.timestamp:''
        };

        this.payload = {
          ...this.firstTabFormValue,
          ...this.secondTabFormValue,
          ...this.thirdTabFormValue,
          ...this.fourTabFormValue,
        };
        console.log("payload", this.payload);
        this.productService.addProductDetails(this.payload).subscribe(
          (res) => {
            alert('form data submit')
            console.log("res", res);
          },
          (err) => {
           
            console.log("err", err);
          }
        );

      }
    }
  }
}

 


  



 

 