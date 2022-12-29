import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-catalogue-home-product',
  templateUrl: './seller-catalogue-home-product.component.html',
  styleUrls: ['./seller-catalogue-home-product.component.scss']
})
export class SellerCatalogueHomeProductComponent implements OnInit {

  @Input('products') products:any[] = [];
  @Input('categories') categories:any[] = [];
  
  isGridView: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeView(type){
    this.isGridView = type
  }

}
