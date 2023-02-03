import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { environment } from '../../../../../environments/environment.prod';

import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-banner-img-widget',
  templateUrl: './banner-img-widget.component.html',
  styleUrls: ['./banner-img-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerImgWidgetComponent implements OnInit {
  config;
  index = 0;
  @Input('label') label: string = '';
  @Input('description') description: string = '';
  @Input('banners') banners: string[] = [];
  imgBaseUrl: string = environment.imageStorage;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  constructor() { 
   
  }

  ngOnInit() {
    console.log(this.banners);
   
   
  }

}
