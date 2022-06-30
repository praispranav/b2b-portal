import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'app-associate-layout',
  templateUrl: './associate-layout.component.html',
  styleUrls: ['./associate-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssociateLayoutComponent extends RootLayout implements OnInit {
  menuLinks = [];
  ngOnInit() {
    this.changeLayout('menu-pin');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
}
