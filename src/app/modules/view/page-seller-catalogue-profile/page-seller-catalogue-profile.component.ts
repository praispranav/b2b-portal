import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-seller-catalogue-profile',
  templateUrl: './page-seller-catalogue-profile.component.html',
  styleUrls: ['./page-seller-catalogue-profile.component.scss']
})
export class PageSellerCatalogueProfileComponent implements OnInit {

  @Input('catalogue') catalogue: any = {};

  constructor() { }

  ngOnInit() {
  }

}
