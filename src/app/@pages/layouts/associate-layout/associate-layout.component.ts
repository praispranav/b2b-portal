import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';
import { ProviderUserAuthService } from './../../../core/providers/auth/provider-user-auth.service';

@Component({
  selector: 'app-associate-layout',
  templateUrl: './associate-layout.component.html',
  styleUrls: ['./associate-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssociateLayoutComponent extends RootLayout implements OnInit {
  menuLinks = [
    {
      label: "Home",
      routerLink: "/associate/dashboard",
    },
    {
      label: "Profile",
      routerLink: "/associate/dashboard",
    },
    {
      label: "Send Request",
      routerLink: "/associate/dashboard",
    },
    {
      label: "Add into Portfolio",
      routerLink: "/associate/dashboard",
    },
    {
      label: "List Seller",
      routerLink: "/associate/dashboard",
    },
    {
      label: "Request For Seller Verification",
      routerLink: "/associate/dashboard",
    },
    {
      label: "Seller Verification Status",
      routerLink: "/associate/dashboard",
    },
    {
      label: "Help",
      toggle: "close",
      submenu: [
        {
          label: "Complaints",
          routerLink: "/associate/help/complain-list",
        },
        {
          label: "Dispute",
          routerLink: "/associate/help/dispute-list",
        },
        {
          label: "Suggestions",
          routerLink: "/associate/help/suggestion-list",
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
