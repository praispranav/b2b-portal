import { Component, Input, OnInit } from '@angular/core';
import { FormProductService } from "../../../core/providers/user/form-product.service";
@Component({
  selector: 'app-page-seller-catalogue-profile',
  templateUrl: './page-seller-catalogue-profile.component.html',
  styleUrls: ['./page-seller-catalogue-profile.component.scss']
})
export class PageSellerCatalogueProfileComponent implements OnInit {
  productList:any[]=[];
  @Input('catalogue') catalogue: any = {};

  constructor(
    private _formProductService: FormProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    let payload = {
      page: 1,
      pageSize: 2,
      searchText: "Approved",
    };
    this._formProductService.getProductBySeller(payload).subscribe(
      (res) => {
        this.productList = res.data;
        this._formProductService.productSubject.next(this.productList);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

}
