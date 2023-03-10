import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { ProviderCategoryService } from "../../../core/providers/user/provider-category.service";
import { SellerSearchService } from "../../../core/providers/user/seller-search.service";
import { FormProductService } from "../../../core/providers/user/form-product.service";
interface SearchQuery {
  category?: string;
  search?: string;
  searchType?: string;
  certification?: string;
  revenue?: string;
  employeeStrength?: string;
  businessType?: string;
  pageSize?: string | number;
  page?: string | number;
}

@Component({
  selector: "app-seller-search",
  templateUrl: "./seller-search.component.html",
  styleUrls: ["./seller-search.component.scss"],
})
export class SellerSearchComponent implements OnInit {
  searchQuery: SearchQuery = {};
  sellerId: string;
  supplierList: any[] = [];
  revenueList: any[] = [];
  categoryList: any[] = [];
  certificationsList: any[] = [];
  businessTypeList: any[] = [];
  productList: any[] = [];
  baseUrl: string;
  totalListSize: number = 0;

  imageEnvironment: string = environment.imageStorage;

  memoBusinessType: any = {};

  constructor(
    private route: ActivatedRoute,
    private categoryService: ProviderCategoryService,
    private sellerSearchService: SellerSearchService,
    private _formProductService: FormProductService,
    private router: Router,
    private _activated: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params;
      this.getSearchedSellerList();
      console.log("Params", params);
    });
  }

  ngOnInit() {
    this.baseUrl = environment.imageStorage;
  }

  getProducts(): void {
    let payload = {
      userId: this.sellerId,
      page: 1,
      pageSize: 2,
      searchText: "Approved",
    };
    this._formProductService.getProductBySeller(payload).subscribe(
      (res) => {
        console.log("res", res);
        this.productList = res.data;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  getSearchedSellerList() {
    const payload = { ...this.searchQuery, searchType: undefined };
    this.sellerSearchService.sellerSearch(payload).subscribe((res: any) => {
      this.supplierList = res.data.searchedSellers;
      this.revenueList = res.data.revenueList;
      this.certificationsList = res.data.certificatesList;
      this.categoryList = res.data.categoryList;
      this.businessTypeList = res.data.businessTypeList;
      this.totalListSize = res.data.total;
      this.supplierList.forEach((element) => {
        this.sellerId = element.sellerDetails._id
      });
      this.getProducts();
    });
  }

  getBusinessTypeValue(types: any) {
    let str = "";
    types.forEach((i) => (str += i.value + ", "));
    return str;
  }

  getPageList() {
    const total = this.totalListSize / Number(this.searchQuery.pageSize);
    if (isNaN(total)) return [];

    const pageNumbers = [];
    for (let x = 1; x <= total; x++) {
      pageNumbers.push(x);
    }

    return pageNumbers;
  }

  isActive(pageNo): boolean {
    if (Number(this.searchQuery.page) === pageNo) return true;
    return false;
  }
  navigateToPage(page) {
    this.router.navigate([], { queryParams: { ...this.searchQuery, page } });
  }

  navigateToCatelog(sellerId) {
    const searchQuery = this.searchQuery;
    this.router.navigate(["/b2b/seller-catalogue-home"], {
      queryParams: {
        ...searchQuery,
        sellerId: sellerId,
        page: 1,
        pageSize: 10,
        searchProduct: "",
      },
    });
  }
  navigateToContact(sellerId): void {
    const searchQuery = this.searchQuery;
    this.router.navigate(["/b2b/seller-catalogue-contact"], {
      queryParams: {
        ...searchQuery,
        sellerId: sellerId,
        page: 1,
        pageSize: 10,
        searchProduct: "",
        categoryId: "",
      },
    });
  }
}
