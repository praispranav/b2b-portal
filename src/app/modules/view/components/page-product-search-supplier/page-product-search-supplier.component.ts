import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-product-search-supplier',
  templateUrl: './page-product-search-supplier.component.html',
  styleUrls: ['./page-product-search-supplier.component.scss']
})
export class PageProductSearchSupplierComponent implements OnInit {
  page: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
