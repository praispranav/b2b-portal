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
      routerLink: "#",
    },
    {
      label: "Profile",
      routerLink: "#",
    },
    {
      label: "Send Request",
      routerLink: "#",
    },
    {
      label: "Add into Portfolio",
      routerLink: "#",
    },
    {
      label: "List Seller",
      routerLink: "#",
    },
    {
      label: "Request For Seller Verification",
      routerLink: "#",
    },
    {
      label: "Seller Verification Status",
      routerLink: "#",
    },
    {
      label: "Help",
      toggle: "close",
      submenu: [
        {
          label: "Complaints",
          routerLink: "#",
        },
        {
          label: "Dispute",
          routerLink: "#",
        },
        {
          label: "Suggestions",
          routerLink: "#",
        },
      ],
    },
  ];
  
  ngOnInit() {
    this.changeLayout('menu-pin');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
}
