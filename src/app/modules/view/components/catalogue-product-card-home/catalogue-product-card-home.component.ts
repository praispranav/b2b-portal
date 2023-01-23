import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormProductService } from "../../../../core/providers/user/form-product.service";

@Component({
  selector: "app-catalogue-product-card-home",
  templateUrl: "./catalogue-product-card-home.component.html",
  styleUrls: ["./catalogue-product-card-home.component.scss"],
})
export class CatalogueProductCardHomeComponent implements OnInit {
  addedProducts: any[] = [];

  constructor(private productService: FormProductService, private router: Router) {
    this.checkProducts();
    this.productService.stringSubject.subscribe((a) => {
      this.checkProducts();
    });
  }

  @Input("products") productList: any[] = [];

  checkProducts() {
    const products = localStorage.getItem(this.productService.productConstant);
    if (products) {
      const parsed = JSON.parse(products);
      this.addedProducts = parsed;
    }
    console.log(products);
  }

  ngOnInit() {}

  findProducts(productId) {
    return this.addedProducts.find(
      (product) => product.productId === productId
    );
  }

  handleAddProduct(product) {
    this.productService.storeProductInfo(product);
  }

  navigateToSeller(product) {
    console.log("Product", product);
    this.router.navigate(["/b2b/seller-catalogue-contact"], {
      queryParams: {
        sellerId: product.supplierId,
        search: "",
        searchType: "Seller",
        page: 1,
        pageSize: 10,
        productId: product.productId,
      },
    });
  }
}
