import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-category-view',
  templateUrl: './page-category-view.component.html',
  styleUrls: ['./page-category-view.component.scss']
})
export class PageCategoryViewComponent implements OnInit {
  condensedTableData = [
    {
      ListedCategories: 'Agriculture',
      SubCategories: 8,
      ListedSuppliers: 96,
      ListedVerifiedSuppliers: 46,
      ListedProducts: 500
    },
    {
      ListedCategories: 'Food & Beverage',
      SubCategories: 5,
      ListedSuppliers: 53,
      ListedVerifiedSuppliers: 34,
      ListedProducts: 643
    },
    {
      ListedCategories: 'Apparel',
      SubCategories: 52,
      ListedSuppliers: 83,
      ListedVerifiedSuppliers: 74,
      ListedProducts: '643'
    },
    {
      ListedCategories: 'Textile Product',
      SubCategories: 23,
      ListedSuppliers: 12,
      ListedVerifiedSuppliers: 34,
      ListedProducts: 430
    },
    {
      ListedCategories: 'Fashion Accessories',
      SubCategories: 71,
      ListedSuppliers: 23,
      ListedVerifiedSuppliers: 44,
      ListedProducts: 520
    },
    {
      ListedCategories: 'Timepieces,Jewellery,Eyewear',
      SubCategories: 15,
      ListedSuppliers: 73,
      ListedVerifiedSuppliers: 14,
      ListedProducts: 343
    },
    {
      ListedCategories: 'Agriculture',
      SubCategories: 35,
      ListedSuppliers: 63,
      ListedVerifiedSuppliers: 24,
      ListedProducts: 243
    }

  ];
  condensedTableDataMap = {
    ListedCategories: null,
    SubCategories: null,
    ListedSuppliers: null,
    ListedVerifiedSuppliers: null,
    ListedProducts: null
  };

  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
  columnModeSettingSmall = window.innerWidth < 560 ? 'standard' : 'force';
  constructor() {

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
      this.columnModeSettingSmall = window.innerWidth < 560 ? 'standard' : 'force';
    };
  }

  ngOnInit() {
  }

}
