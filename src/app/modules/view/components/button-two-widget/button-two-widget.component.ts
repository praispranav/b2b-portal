import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button-two-widget',
  templateUrl: './button-two-widget.component.html',
  styleUrls: ['./button-two-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonTwoWidgetComponent implements OnInit {
  config;
  index = 0;
  constructor() { }

  ngOnInit() {
    this.config = {
      direction: 'vertical',
      autoplay: {
        delay: 5000
      }
    };
  }
}




