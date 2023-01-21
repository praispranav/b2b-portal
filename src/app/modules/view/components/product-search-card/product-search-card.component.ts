import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormProductService } from "../../../../core/providers/user/form-product.service";

@Component({
  selector: "app-product-search-card",
  templateUrl: "./product-search-card.component.html",
  styleUrls: ["./product-search-card.component.scss"],
})
export class ProductSearchCardComponent implements OnInit {
  constructor(private router: Router, private productService: FormProductService) {}

  @Input("data") productList: any[] = [];

  addedProducts: any[] = [];

  ngOnInit() {
    this.checkProducts();
    this.productService.stringSubject.subscribe((a)=>{
      this.checkProducts();
    })
  }

  checkProducts(){
    const products = localStorage.getItem(this.productService.productConstant);
      if(products){
        const parsed = JSON.parse(products);
        this.addedProducts = parsed;
      }
      console.log(products);
  }

  navigateToSeller(product) {
    console.log(product);
    this.router.navigate(
      ["/b2b/seller-catalogue-contact"],
      {
        queryParams: {
          sellerId: product.supplierId,
          search: "",
          searchType: "Seller",
          page: 1,
          pageSize: 10,
        },
      }
    );
  }

  findProducts(productId){
    return this.addedProducts.find((product)=> product.productId === productId )
  }

  handleAddProduct(product){
    this.productService.storeProductInfo(product)
  }
}
