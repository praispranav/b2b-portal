import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BuyerMailService } from "../../../core/providers/user/buyer-mail.service";
import { SellerSearchService } from "../../../core/providers/user/seller-search.service";

@Component({
  selector: "app-page-seller-catalogue-contact",
  templateUrl: "./page-seller-catalogue-contact.component.html",
  styleUrls: ["./page-seller-catalogue-contact.component.scss"],
})
export class PageSellerCatalogueContactComponent implements OnInit {
  sellerId: string = "";
  comapnyDetails: any = {
    sellerDetails: {},
  };

  message: string = '';
  products: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private sellerSearch: SellerSearchService,
    private buyerMailService: BuyerMailService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.sellerId = params["sellerId"];
      this.getSellerDetails(this.sellerId);
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

  sendMessage() {
    const payload = {
      sellerId: this.comapnyDetails.sellerDetails._id,
      message: this.message,
      attachments: [],
      product: this.products,
    };

    this.buyerMailService.createNewRequest(payload).subscribe((res) => {
      console.log("ContactUs Response", res);
    });
  }
}
