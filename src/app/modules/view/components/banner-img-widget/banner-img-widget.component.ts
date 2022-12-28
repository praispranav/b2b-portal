import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-banner-img-widget',
  templateUrl: './banner-img-widget.component.html',
  styleUrls: ['./banner-img-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerImgWidgetComponent implements OnInit {

  @Input('label') label: string = '';
  @Input('description') description: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
