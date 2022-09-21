import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { RootLayout } from "../root/root.component";

@Component({
  selector: "app-seller-layout",
  templateUrl: "./seller-layout.component.html",
  styleUrls: ["./seller-layout.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SellerLayoutComponent extends RootLayout implements OnInit {
  menuLinks = [
    {
      label: "Dashboard",
      routerLink: "seller-dashboard",
    },
    {
      label: "Profile",
      routerLink: "seller-profile",
    },
    {
      label: "Products",
      toggle: "close",
      submenu: [
        {
          label: "Add Products",
          routerLink: "product/product-add",
        },
        {
          label: "Make Your Own Categories",
          routerLink: "category/category-add",
        },
        {
          label: "Ask For Brand Approval",
          routerLink: "brand-approval/product-add",
        },
      ],
    },
    {
      label: "Messages",
      toggle: "close",
      submenu: [
        {
          label: "Inbox [2]",
          routerLink: "seller-dashboard",
        },
        {
          label: "Sent",
          routerLink: "seller-dashboard",
        },
        {
          label: "Spam",
          routerLink: "seller-dashboard",
        },
        {
          label: "Flagged",
          routerLink: "seller-dashboard",
        },
      ],
    },
    {
      label: "Leads",
      routerLink: "",
    },
    {
      label: "Multiple Quotes Request",
      routerLink: "seller-dashboard",
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
      ],
    },
    {
      label: "Participating in Trade Show",
      routerLink: "seller-dashboard",
    },
    {
      label: "Help",
      toggle: "close",
      submenu: [
        {
          label: "Complaints",
          routerLink: "/seller/help/complain-list",
        },
        {
          label: "Dispute",
          routerLink: "/seller/help/dispute-list",
        },
        {
          label: "Suggestions",
          routerLink: "seller/help/suggestion-list",
        },
      ],
    },
    {
      label: "My Buying Interests",
      routerLink: "#",
    },
  ];

  ngOnInit() {
    this.changeLayout('menu-pin');
    this.changeLayout('menu-behind');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
}
