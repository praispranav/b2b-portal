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
      label: "Products",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
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
      label: "My Buying Intrests",
      routerLink: "seller-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Messages",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Inbox",
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
      label: "Multiple Quotes Request",
      routerLink: "seller-dashboard",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Trade Services",
      iconType: "fi",
      iconName: "shield",
      toggle: "close",
      submenu: [
        {
          label: "Logistics Solutions",
          routerLink: "/b2b/logistic-solutions",
          iconType: "letter",
          iconName: "dl",
        },
        {
          label: "Inspection Service",
          routerLink: "/b2b/inspection-service",
          iconType: "letter",
          iconName: "sl",
        },
      ],
    },
    {
      label: "Help",
      iconType: "fi",
      iconName: "shield",
      toggle: "close",
      submenu: [
        {
          label: "Complaints",
          routerLink: "help/complain-add",
          iconType: "letter",
          iconName: "dl",
        },
        {
          label: "Disputes",
          routerLink: "help/dispute-add",
          iconType: "letter",
          iconName: "sl",
        },
        {
          label: "Suggestions",
          routerLink: "help/suggestion-add",
          iconType: "letter",
          iconName: "bl",
        },
      ],
    },
  ];

  ngOnInit() {
    this.changeLayout("menu-pin");
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
}
