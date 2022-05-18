import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search-categories',
  templateUrl: './product-search-categories.component.html',
  styleUrls: ['./product-search-categories.component.scss']
})
export class ProductSearchCategoriesComponent implements OnInit {

  constructor() { }

  categoriesList: any[] = [
    { name: "Men's Jackets" },
    { name: "Women's Coats" },
    { name: "Gym Fitness Sets" },
    { name: "Outdoor Jackets" },
    { name: "Outdoor& Hiking Clothing" },
    { name: "Fleece" },
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
