import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { ProviderCategoryService } from "../../../core/providers/user/provider-category.service";
import { SellerSearchService } from "../../../core/providers/user/seller-search.service";

interface SearchQuery{
  category?: string;
  search?: string;
  searchType?: string;
  certification?: string;
  revenue?: string;
  employeeStrength?: string;
  businessType?: string;
  pageSize?: string | number;
  page?: string | number
}

@Component({
  selector: "app-seller-search",
  templateUrl: "./seller-search.component.html",
  styleUrls: ["./seller-search.component.scss"],
})

export class SellerSearchComponent implements OnInit {
  searchQuery: SearchQuery = {};

  supplierList: any[] = [];
  revenueList: any[] = [];
  categoryList: any[] = [];
  certificationsList: any[] = [];
  businessTypeList: any[] = [];

  totalListSize: number = 0

  imageEnvironment: string = environment.imageStorage;

  memoBusinessType: any = {}

  constructor(
    private route: ActivatedRoute,
    private categoryService: ProviderCategoryService,
    private sellerSearchService: SellerSearchService,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params;
      this.getSearchedSellerList();
      console.log("Params", params);
    });
  }

  ngOnInit() {}

  getSearchedSellerList() {
    const payload = { ...this.searchQuery, searchType: undefined }
    this.sellerSearchService
      .sellerSearch(payload)
      .subscribe((res: any) => {
        this.supplierList = res.data.searchedSellers;
        this.revenueList = res.data.revenueList;
        this.certificationsList = res.data.certificatesList;
        this.categoryList = res.data.categoryList;
        this.businessTypeList = res.data.businessTypeList
        this.totalListSize = res.data.total;
      });
  }

  getBusinessTypeValue(types:any){
    let str = '';
    types.forEach((i)=> str+= i.value + ", ")
    return str
  }

  getPageList(){
    const total = this.totalListSize/Number(this.searchQuery.pageSize)
    if(isNaN(total)) return [];

    const pageNumbers = [];
    for(let x =1; x<= total; x++){
      pageNumbers.push(x);
    }

    return pageNumbers
  }

  isActive(pageNo):boolean{
    if(Number(this.searchQuery.page) === pageNo) return true
    return false
  }

  navigateToPage(page){
    this.router.navigate([], { queryParams: { ...this.searchQuery, page }})
  }
}
