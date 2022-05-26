import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search-filter',
  templateUrl: './product-search-filter.component.html',
  styleUrls: ['./product-search-filter.component.scss']
})
export class ProductSearchFilterComponent implements OnInit {

  constructor() { }
  filterList: any[] = [
    {
      "name": "Style",
      "image": "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/Black-custom-bomber-jacket-wholesale-Embroider-printing.jpg_300x300.jpg"
    },
    {
      "name": "Cotton",
      "image": "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/OEM-Men-2019-Design-Long-Sleeves-Denim.jpg_100x100.jpg"
    },
    {
      "name": "Zipper",
      "image": "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/Custom-Wholesale-Cheap-Price-Zipper-Stripe-Track.jpg_100x100.jpg"
    },
    {
      "name": "Warm",
      "image": "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/Design-Your-Own-Customized-Varsity-Jacket-Custom.jpg_100x100.jpg"
    },
    {
      "name": "O-neck",
      "image": "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/H034b54eb143b4da6a93cd82aa88fe57eC.jpg_100x100.jpg"
    },
    {
      "name": "Long",
      "image": "https://icbu-cpv-image.oss-us-west-1.aliyuncs.com/cz5001a-New-arrival-high-quality-mens-plus.jpg_100x100.jpg"
    },

  ]
  ngOnInit() {
  }

}
