import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { RootLayout } from "../root/root.component";

@Component({
  selector: "app-buyer-layout",
  templateUrl: "./buyer-layout.component.html",
  styleUrls: ["./buyer-layout.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class BuyerLayoutComponent extends RootLayout implements OnInit {
  menuLinks = [
    {
      label: "Dashboard",
      routerLink: "/buyer/dashboard",
    },
    {
      label: "Profile",
      routerLink: "/buyer/profile",
    },
    {
      label: "Messages",
      toggle: "close",
      submenu: [
        {
          label: "Inbox [2]",
          routerLink: "/buyer/dashboard",
        },
        {
          label: "Sent",
          routerLink: "/buyer/dashboard",
        },
        {
          label: "Spam",
          routerLink: "/buyer/dashboard",
        },
        {
          label: "Flagged",
          routerLink: "/buyer/dashboard",
        },
      ],
    },
    {
      label: "Buying Offers",
      routerLink: "/buyer/dashboard",
    },
    {
      label: "Multiple Quotes Request",
      routerLink: "/buyer/dashboard",
    },
    {
      label: "Trade Services",
      toggle: "close",
      submenu: [
        {
          label: "Logistics Solutions",
          routerLink: "/b2b/logistic-solutions",
        },
        {
          label: "Inspection Service",
          routerLink: "/b2b/inspection-service",
        },
        {
          label: "Suppiler Report",
          routerLink: "/b2b/supplier-report",
        },
        {
          label: "Suppiler Background Search",
          routerLink: "/b2b/supplier-background-search",
        },
      ],
    },
    {
      label: "Help",
      toggle: "close",
      submenu: [
        {
          label: "Complaints",
          routerLink: "/buyer/help/complain-list",
        },
        {
          label: "Dispute",
          routerLink: "/buyer/help/dispute-list",
        },
        {
          label: "Suggestions",
          routerLink: "/buyer/help/suggestion-list",
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
