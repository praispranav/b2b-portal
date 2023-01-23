import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { FormProductService } from "../../../core/providers/user/form-product.service";
import { ProviderCompanyProfileService } from "../../../core/providers/user/provider-company-profile.service";
import { SellerSearchService } from "../../../core/providers/user/seller-search.service";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { ProviderCategoryService } from "../../../core/providers/user/provider-category.service";
import { PriceType } from "../../../core/enums/priceType";

TimeAgo.addDefaultLocale(en)

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

  products:any[] = [];
  totalProducts: number = 0;
  categories: any[] = [];

  oldSellerId: string = "";
  oldProductSearchText: string = "";

  catalogue: any = {};

  constructor(
    private route: ActivatedRoute,
    private sellerSearch: SellerSearchService,
    private companyProfileService: ProviderCompanyProfileService,
    private productService: FormProductService,
    private categoryService: ProviderCategoryService,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchParams = params;
      if(this.oldSellerId !== params['sellerId']){
        this.getSellerDetails(params.sellerId);
        this.getSellerCategories();
      }
      this.oldSellerId = params['sellerId']

      if(this.oldProductSearchText !== params['searchProduct'] || params['searchProduct'] == ''){
        this.getProducts();
      }


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

  getTimeCount(date){
    const timeAgo = new TimeAgo('en-US')
    return timeAgo.format(new Date(date));
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

  getMainProducts() {
    if (Array.isArray(this.sellerProfile.companyProfile.mainProduct))
      return this.sellerProfile.companyProfile.mainProduct.join(",");
    return "";
  }

  getProducts() {
    this.productService
      .searchProductBySeller({
        sellerId: this.searchParams.sellerId,
        page: this.searchParams.page,
        pageSize: this.searchParams.pageSize,
        search: this.searchParams.searchProduct || "",
        categoryId: this.searchParams.categoryId
      })
      .subscribe((res: any) => {
        this.totalProducts = res.data.total;
        if (Array.isArray(res.data.products)) {
          this.products = res.data.products.map((i) => {
            let minimumOrderQuantity;
            let minimumPrice;
  
            if (i.sellingPriceType === PriceType.SetUniformPriceofFOB) {
              const moqs = [];
              const prices = [];
              i.bulkPrice.forEach((i) => {
                moqs.push(Number(i.moqUnit));
                prices.push(Number(i.fobUnitPrice));
              });
              minimumOrderQuantity = Math.min(...moqs);
              minimumPrice = Math.min(...prices);
            } else {
              minimumOrderQuantity = Number(i.moq);
              minimumPrice = Number(i.fobPrice);
            }
            debugger;
            return {
              name: i.productName,
              price: i.moq,
              minimumOrderQuantity: minimumOrderQuantity,
              minimumPrice: minimumPrice,
              year: "",
              supplier: "",
              supplierId: i.userId,
              productId: i._id,
              image: environment.imageStorage + i.productImage,
            };
          });
          
        }
      });
  }

  getSellerDetails(id) {
    this.sellerSearch.sellerSearchById(id).subscribe((res: any) => {
      if (res.header.code === 200) {
        this.sellerProfile = res.data;
        console.log("Main Products", this.getMainProducts());
        this.catalogue = {
          company: this.sellerProfile.companyProfile.company,
          categoryName: this.sellerProfile.mainCategory.name,
          businessType: this.getBusinessTypeText(),
          yearlyTurnover: this.sellerProfile.exportCapabilities.yearlyTurnover,
          exportingPercent:
            this.sellerProfile.exportCapabilities.exportingPercent,
          mainProducts: this.getMainProducts(),
          banners: this.sellerProfile.companyDetail.banners
        };
      }
      console.log(res);
      console.log("Banners", this.sellerProfile.companyDetail.banners)
    });
  }

  getSellerCategories(){
    this.categoryService.getCategoryListBySeller(this.searchParams.sellerId).subscribe((res)=>{
      console.log("categories", res)
      this.categories = res.data
    })
  }
}
