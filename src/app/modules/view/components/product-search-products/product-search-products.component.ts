import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search-products',
  templateUrl: './product-search-products.component.html',
  styleUrls: ['./product-search-products.component.scss']
})
export class ProductSearchProductsComponent implements OnInit {
  page: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
