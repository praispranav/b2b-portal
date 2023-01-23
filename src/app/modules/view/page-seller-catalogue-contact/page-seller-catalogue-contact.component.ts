import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { BuyerMailService } from "../../../core/providers/user/buyer-mail.service";
import { FormProductService } from "../../../core/providers/user/form-product.service";
import { SellerSearchService } from "../../../core/providers/user/seller-search.service";

@Component({
  selector: "app-page-seller-catalogue-contact",
  templateUrl: "./page-seller-catalogue-contact.component.html",
  styleUrls: ["./page-seller-catalogue-contact.component.scss"],
})
export class PageSellerCatalogueContactComponent implements OnInit {
  sellerId: string = "";
  queryParams: any = {};
  productId : string = "";
  imageStorage: string = environment.imageStorage
  comapnyDetails: any = {
    sellerDetails: {},
  };
  quantity: string = '';

  productDetail: any = null;

  message: string = '';
  products: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private sellerSearch: SellerSearchService,
    private buyerMailService: BuyerMailService,
    private productService: FormProductService,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.sellerId = params["sellerId"];
      this.productId = params['productId'];
      this.queryParams = params;
      this.getSellerDetails(this.sellerId);
      this.getProductDetails();
    });
  }

  ngOnInit() {}

  getSellerDetails(sellerId) {
    this.sellerSearch
      .sellerDetailsCompanyProfileBusinessType(this.sellerId)
      .subscribe((res: any) => {
        if (res.header.code === 200) {
          this.comapnyDetails = res.data;
          console.log("COmpanyDetail", this.comapnyDetails);
        } else console.error("Error", res);
      });
  }
  
  buildForm() {

  }

  getProductDetails(){
    if(this.productId){
      this.productService.getProductById(this.productId).subscribe((res)=>{
        this.productDetail = res.data[0];
        debugger;
      })
    }
  }

  removeProduct(){
    this.router.navigate([], { queryParams: { ...this.queryParams, productId: undefined }});
    this.productDetail = null;
  }

  sendMessage() {
    const payload = {
      sellerId: this.comapnyDetails.sellerDetails._id,
      message: this.message,
      attachments: [],
      product: this.productDetail ? [{ productId: this.productDetail._id, quantity: this.quantity }] : [],
    };

    this.buyerMailService.createNewRequest(payload).subscribe((res) => {
      console.log("ContactUs Response", res);
      this.message = '';
      this.quantity = ""
      this.removeProduct();
    });
  }
}
