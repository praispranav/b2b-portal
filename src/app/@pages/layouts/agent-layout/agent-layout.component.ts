import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'app-agent-layout',
  templateUrl: './agent-layout.component.html',
  styleUrls: ['./agent-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgentLayoutComponent extends RootLayout implements OnInit {
  menuLinks = [];
  ngOnInit() {
    this.changeLayout('menu-pin');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
}
