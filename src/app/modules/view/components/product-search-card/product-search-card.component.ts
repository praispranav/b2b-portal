import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search-card',
  templateUrl: './product-search-card.component.html',
  styleUrls: ['./product-search-card.component.scss']
})
export class ProductSearchCardComponent implements OnInit {

  constructor() { }

  @Input('data') productList: any[] = [];
  ngOnInit() {
  }

}
