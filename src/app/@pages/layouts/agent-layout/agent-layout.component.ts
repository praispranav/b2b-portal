import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'app-agent-layout',
  templateUrl: './agent-layout.component.html',
  styleUrls: ['./agent-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgentLayoutComponent extends RootLayout implements OnInit {
  menuLinks = [
    {
      label: "Home",
      routerLink: "seller-dashboard",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Profile",
      routerLink: "seller-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Assigned Account",
      routerLink: "seller-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Verify Accounts",
      routerLink: "seller-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Accounts Status ",
      routerLink: "seller-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Help",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Complaints",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Disputes",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Suggestions",
          routerLink: "buyer-dashboard",
        }
      ],
    },
  ];
  ngOnInit() {
    this.changeLayout('menu-pin');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
}
