import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue-product-search-home',
  templateUrl: './catalogue-product-search-home.component.html',
  styleUrls: ['./catalogue-product-search-home.component.scss']
})
export class CatalogueProductSearchHomeComponent implements OnInit {

  constructor() { }

  @Input('categories') categoriesList: any[] = [
    // { name: "Men's Jackets" },
    // { name: "Women's Coats" },
    // { name: "Gym Fitness Sets" },
    // { name: "Outdoor Jackets" },
    // { name: "Outdoor& Hiking Clothing" },
    // { name: "Fleece" },
  ];

  countryList: any[] = [
    {
      name: "England",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
    },
    {
      name: "Scotland",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg",
    },
    {
      name: "Wales",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg",
    },
  ];

  ngOnInit() {
  }

}
