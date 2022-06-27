import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent extends RootLayout implements OnInit {
  menuLinks = [];
  ngOnInit() {
    this.changeLayout('menu-pin');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
}
