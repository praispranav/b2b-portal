
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';
declare var stepsForm: any;
declare var pg: any;

import { IsotopeOptions } from 'ngx-isotope';
@Component({
  selector: 'app-catalogue-seller-company-details',
  templateUrl: './catalogue-seller-company-details.component.html',
  styleUrls: ['./catalogue-seller-company-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('enterAnimation', [
      state(
        'loading',
        style({
          opacity: '0',
          transform: 'translateY(8%)'
        })
      ),
      state(
        'ready',
        style({
          opacity: '1',
          transform: 'translateY(0)'
        })
      ),
      transition('loading => ready', animate('300ms cubic-bezier(0.1, 0.0, 0.2, 1)'))
    ])
  ]
})
export class CatalogueSellerCompanyDetailsComponent implements OnInit {
  feed = [];
  _isLoading: boolean = true;
  _mode: boolean = true;
  constructor() { }
  @Input()
  set mode(value) {
    this._mode = value;
  }

  ngOnInit() {
  }

  public myOptions: IsotopeOptions = {
    itemSelector: '.card',
    masonry: {
      columnWidth: 300,
      gutter: 20,
      fitWidth: true
    }
  };

}
