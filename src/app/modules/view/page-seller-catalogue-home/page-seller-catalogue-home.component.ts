import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProviderCompanyProfileService } from "../../../core/providers/user/provider-company-profile.service";
import { SellerSearchService } from "../../../core/providers/user/seller-search.service";

@Component({
  selector: "app-page-seller-catalogue-home",
  templateUrl: "./page-seller-catalogue-home.component.html",
  styleUrls: ["./page-seller-catalogue-home.component.scss"],
})
export class PageSellerCatalogueHomeComponent implements OnInit {
  searchParams: any = {};
  sellerProfile: any = {
    companyProfile: {},
    companyDetail: {},
    certification: {},
    exportCapabilities: {},
    businessType: {},
    sellerDetails: {},
    mainCategory: {},
  };

  catalogue: any = {};

  constructor(
    private route: ActivatedRoute,
    private sellerSearch: SellerSearchService,
    private companyProfileService: ProviderCompanyProfileService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchParams = params;
      this.getSellerDetails(params.sellerId);
      console.log("SellerId", params);
    });
  }

  ngOnInit() {}

  getCompanyProfile(id) {
    // this.companyProfileService.getCompanyProfileByUserId(id).subscribe((res)=>{
    //   if(res.header.code === 200) {
    //     this.sellerProfile = res.data;
    //     console.log("Data", res.data);
    //   }
    // })
  }

  getBusinessTypeText() {
    if (
      this.sellerProfile.businessType &&
      this.sellerProfile.businessType.types
    )
      return this.sellerProfile.businessType.types
        .filter((i) => i.checked)
        .map((i) => i.value)
        .join(",");
    return "";
  }

  getSellerDetails(id) {
    console.log("Id", id);
    this.sellerSearch.sellerSearchById(id).subscribe((res: any) => {
      if (res.header.code === 200) {
        this.sellerProfile = res.data;
        this.catalogue = {
          company: this.sellerProfile.companyProfile.company,
          categoryName: this.sellerProfile.mainCategory.name,
          businessType: this.getBusinessTypeText(),
        };
      }
      console.log(res);
    });
  }

  getProducts() {}
}
