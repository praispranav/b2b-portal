import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

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
      label: "Send Request",
      routerLink: "seller-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Add into Protfolio",
      routerLink: "seller-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "List Seller",
      routerLink: "seller-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Request for Seller Verification",
      routerLink: "seller-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Seller Verification Status",
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
