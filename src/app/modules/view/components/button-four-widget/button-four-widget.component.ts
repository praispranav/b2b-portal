import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-four-widget',
  templateUrl: './button-four-widget.component.html',
  styleUrls: ['./button-four-widget.component.scss']
})
export class ButtonFourWidgetComponent implements OnInit {
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
