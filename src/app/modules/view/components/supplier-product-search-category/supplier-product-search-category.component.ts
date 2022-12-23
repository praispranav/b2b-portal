
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-product-search-category',
  templateUrl: './supplier-product-search-category.component.html',
  styleUrls: ['./supplier-product-search-category.component.scss']
})
export class SupplierProductSearchCategoryComponent implements OnInit {

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
