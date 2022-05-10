import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-product-search",
  templateUrl: "./page-product-search.component.html",
  styleUrls: ["./page-product-search.component.scss"],
})
export class PageProductSearchComponent implements OnInit {
  constructor() {}
  categoriesList: any[] = [
    { name: "Men's Jackets" },
    { name: "Women's Coats" },
    { name: "Gym Fitness Sets" },
    { name: "Outdoor Jackets" },
    { name: "Outdoor& Hiking Clothing" },
    { name: "Fleece" },
  ];

  productList: any[] = [
    {
      name: "simply dummy text of the printing and typesetting industry.",
      image:
        "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/H034b54eb143b4da6a93cd82aa88fe57eC.jpg_100x100.jpg",
      price: 42,
      year: 3,
      supplier: "GS",
    },
    {
      name: "simply dummy text of the printing and typesetting industry.",
      image:
        "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/High-Quality-Men-s-Washed-Denim-Jacket.jpg_300x300.jpg",
      price: 23,
      year: 1,
      supplier: "DC",
    },
    {
      name: "simply dummy text of the printing and typesetting industry.",
      image:
        "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/Hot-Style-Sherpa-Wholesale-Outdoor-Clothing-Custom.jpg_100x100.jpg",
      price: 10,
      year: 2,
      supplier: "RD",
    },
    {
      name: "simply dummy text of the printing and typesetting industry.",
      image:
        "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/O-Neck-Men-Real-lather-Zipper-Jackets.jpg_300x300.jpg",
      price: 9,
      year: 4,
      supplier: "GS",
    },
    {
      name: "simply dummy text of the printing and typesetting industry.",
      image:
        "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/baseball-jackets-men-custom-applique-embroidery-logo.jpg_100x100.jpg",
      price: 22,
      year: 1,
      supplier: "PS",
    },
    {
      name: "simply dummy text of the printing and typesetting industry.",
      image:
        "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/cz5001a-New-arrival-high-quality-mens-plus.jpg_100x100.jpg",
      price: 15,
      year: 2,
      supplier: "RD",
    },
    {
      name: "simply dummy text of the printing and typesetting industry.",
      image:
        "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/Custom-Wholesale-Cheap-Price-Zipper-Stripe-Track.jpg_100x100.jpg",
      price: 19,
      year: 2,
      supplier: "GS",
    },
    {
      name: "simply dummy text of the printing and typesetting industry.",
      image:
        "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/New-Autumn-Winter-Men-Waterproof-And-Warm.jpg_100x100.jpg",
      price: 10,
      year: 1,
      supplier: "PS",
    },
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

  ngOnInit() {}
}
