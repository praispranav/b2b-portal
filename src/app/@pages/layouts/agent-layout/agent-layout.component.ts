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
      routerLink: "/agent/dashboard",
    },
    {
      label: "Profile",
      routerLink: "#",
    },
    {
      label: "Assigned Account",
      routerLink: "#",
    },
    {
      label: "Verify Accounts",
      routerLink: "#",
    },
    {
      label: "Accounts Status",
      routerLink: "#",
    },
    {
      label: "Help",
      toggle: "close",
      submenu: [
        {
          label: "Complaints",
          routerLink: "/agent/help/complain-list",
        },
        {
          label: "Dispute",
          routerLink: "/agent/help/dispute-list",
        },
        {
          label: "Suggestions",
          routerLink: "/agent/help/suggestion-list",
        },
      ],
    },
  ];
  ngOnInit() {
    this.changeLayout('menu-pin');
    this.changeLayout('menu-behind');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
}
