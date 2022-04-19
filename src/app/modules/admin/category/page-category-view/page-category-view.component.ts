import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-category-view',
  templateUrl: './page-category-view.component.html',
  styleUrls: ['./page-category-view.component.scss']
})
export class PageCategoryViewComponent implements OnInit {
  basic_table_data;
  condensedTableData = [
    {
      title: 'First tour',
      places: 'Simple but not simpler',
      condensed: 'Wonders can be true. Believe in your dreams!'
    },
    {
      title: 'Second tour',
      places: 'Simple but not simpler',
      condensed: 'Wonders can be true. Believe in your dreams!'
    },
    {
      title: 'Third tour',
      places: 'Simple but not simpler',
      condensed: 'Wonders can be true. Believe in your dreams!'
    },
    {
      title: 'Four tour',
      places: 'Simple but not simpler',
      condensed: 'Wonders can be true. Believe in your dreams!'
    },
    {
      title: 'Fifth tour',
      places: 'Simple but not simpler',
      condensed: 'Wonders can be true. Believe in your dreams!'
    }
  ];

  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
  columnModeSettingSmall = window.innerWidth < 560 ? 'standard' : 'force';
  constructor() {
    // this.fetch(data => {
    //   this.basic_table_data = data;
    // });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
      this.columnModeSettingSmall = window.innerWidth < 560 ? 'standard' : 'force';
    };
  }

  ngOnInit() {
  }

}
