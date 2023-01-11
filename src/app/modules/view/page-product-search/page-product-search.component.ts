import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { FormProductService } from "../../../core/providers/user/form-product.service";

@Component({
  selector: "app-page-product-search",
  templateUrl: "./page-product-search.component.html",
  styleUrls: ["./page-product-search.component.scss"],
})
export class PageProductSearchComponent implements OnInit {
  searchText: string = "";
  productList: any[] = [];
  categories: any[] = [];
  selectedCategories: any[] = [];
  searchParams: any = {};
  supplierCountries: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: FormProductService,
    private router:Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchText = params["search"];
      this.searchParams = params;
      this.getSearchedProducts();
    });
  }

  ngOnInit() { }

  getSearchedProducts() {
    const payload = {};
    payload['search'] = this.searchText;
    if (this.searchParams.categoryId && this.searchParams.categoryId.length) payload['categoryId'] = this.searchParams.categoryId;
    if (this.searchParams.page && this.searchParams.page.length) payload['page'] = this.searchParams.page;
    if (this.searchParams.pageSize && this.searchParams.pageSize.length) payload['pageSize'] = this.searchParams.pageSize;
    if (this.searchParams.moq && this.searchParams.moq.length) payload['moq'] = this.searchParams.moq
    if (this.searchParams.productType && this.searchParams.productType.length) payload['productType'] = this.searchParams.productType
    if (this.searchParams.min && this.searchParams.min.length) payload['min'] = this.searchParams.min
    if (this.searchParams.max && this.searchParams.max.length) payload['max'] = this.searchParams.max
    if (this.searchParams.countries && this.searchParams.countries.length) payload['countries'] = this.searchParams.countries

    this.productService
      .searchProduct(payload)
      .subscribe((res: any) => {
        if(res.data.categories){
          this.categories = res.data.categories;
        }
        if(res.data.supplierCountries){
          this.supplierCountries = res.data.supplierCountries;
        }
        if (Array.isArray(res.data.products)) {
          const newProductList = res.data.products.map((i) => {
            return {
              name: i.productName,
              price: i.moq,
              year: "",
              supplier: "",
              image: environment.imageStorage + i.productImage,
            };
          });
          this.productList = newProductList;
        }
      });

    }

    selectProductType(productType){
      this.router.navigate([], { queryParams: { ...this.searchParams, productType: productType}})
    }
  }
