import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormProductService } from "../../../core/providers/user/form-product.service";
@Component({
  selector: 'app-page-seller-catalogue-profile',
  templateUrl: './page-seller-catalogue-profile.component.html',
  styleUrls: ['./page-seller-catalogue-profile.component.scss']
})
export class PageSellerCatalogueProfileComponent implements OnInit {
  productList: any[] = [];
  sellerId: string;
  @Input('catalogue') catalogue: any = {};

  constructor(
    private _formProductService: FormProductService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sellerId = this._activatedRoute.snapshot.queryParams['sellerId'];
    console.log('sellerId', this.sellerId);

    this.getProducts();
  }

  getProducts(): void {
    let payload = {
      userId: this.sellerId,
      page: 1,
      pageSize: 3,
      searchText: "Approved",
    };
    this._formProductService.getProductBySeller(payload).subscribe(
      (res) => {
        this.productList = res.data;
        console.log('productList', this.productList);

        this._formProductService.productSubject.next(this.productList);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

}
