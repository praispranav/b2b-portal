import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { FormProductService } from '../../../../core/providers/user/form-product.service';

@Component({
  selector: 'app-home-available-product-customization',
  templateUrl: './home-available-product-customization.component.html',
  styleUrls: ['./home-available-product-customization.component.scss']
})
export class HomeAvailableProductCustomizationComponent implements OnInit {
  productList: any[] = [];
  baseUrl: string = environment.imageStorage;

  constructor(
    private _formProductservice: FormProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    let payload = {
      page: '1',
      pageSize: '10'
    }
    this._formProductservice.getAllProduct(payload).subscribe(
      (res) => {
        console.log('res-------', res);
        this.productList = res.data;
      }, (err) => {
        console.log('err', err);
      })
  }

}
