import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';
import { ProviderUserAuthService } from './../../../core/providers/auth/provider-user-auth.service';

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
      routerLink: "/agent/dashboard",
    },
    {
      label: "Assigned Account",
      routerLink: "/agent/dashboard",
    },
    {
      label: "Verify Accounts",
      routerLink: "/agent/dashboard",
    },
    {
      label: "Accounts Status",
      routerLink: "/agent/dashboard",
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

  constructor(private providerUserAuthService: ProviderUserAuthService){}

  ngOnInit() {
    this.changeLayout('menu-pin');
    this.changeLayout('menu-behind');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }

  userSignOut(){
    this.providerUserAuthService.userSignOutNoApiCall();
  }
}
