import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { ProviderCategoryService } from "../../../core/providers/user/provider-category.service";
import { SellerSearchService } from "../../../core/providers/user/seller-search.service";

@Component({
  selector: "app-seller-search",
  templateUrl: "./seller-search.component.html",
  styleUrls: ["./seller-search.component.scss"],
})
export class SellerSearchComponent implements OnInit {
  searchText: string = "";

  supplierList: any[] = [];
  revenueList: any[] = [];
  categoryList: any[] = [];
  certificationsList: any[] = [];

  imageEnvironment: string = environment.imageStorage;

  constructor(
    private route: ActivatedRoute,
    private categoryService: ProviderCategoryService,
    private sellerSearchService: SellerSearchService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchText = params["search"];
      this.getSearchedSellerList();
      console.log("Params", params);
    });
  }

  ngOnInit() {}

  getSearchedSellerList() {
    console.log("Seller");
    this.sellerSearchService
      .sellerSearch(this.searchText)
      .subscribe((res: any) => {
        this.supplierList = res.data.searchedSellers;
        this.revenueList = res.data.revenueList;
        this.certificationsList = res.data.certificatesList;
        this.categoryList = res.data.categoryList;

        console.log(
          "Seller Search",
          this.supplierList,
          this.revenueList,
          this.certificationsList,
          this.categoryList
        );
      });
  }
}
