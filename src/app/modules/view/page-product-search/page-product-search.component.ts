import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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

  constructor(
    private route: ActivatedRoute,
    private productService: FormProductService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchText = params["search"];
      this.getSearchedProducts();
    });
  }

  ngOnInit() {}

  getSearchedProducts() {
    this.productService.searchProduct(this.searchText).subscribe((res: any) => {
      if (Array.isArray(res.data)) {
        const newProductList = res.data.map((i)=>{
          return { name: i.productName, price: i.moq, year:"", supplier: "", image: environment.imageStorage + i.productImage }
        })
        this.productList = newProductList;
        console.log(newProductList)
      }
    });
  }
}
