import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-product-search-products',
  templateUrl: './page-product-search-products.component.html',
  styleUrls: ['./page-product-search-products.component.scss']
})
export class PageProductSearchProductsComponent implements OnInit {

  constructor() { }
  page: number = 1;
  ngOnInit() {
  }

}
