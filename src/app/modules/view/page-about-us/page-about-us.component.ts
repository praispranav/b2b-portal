import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

// import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-page-about-us',
  templateUrl: './page-about-us.component.html',
  styleUrls: ['./page-about-us.component.scss'],
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
export class PageAboutUsComponent implements OnInit {
  _isLoading: boolean = true;
  _mode: boolean = true;
  @Input() footerVariant: string;
  @Input() hideFooter: boolean;

  //Get Year
  year = new Date().getFullYear()
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set mode(value) {
    this._mode = value;
  }

}
