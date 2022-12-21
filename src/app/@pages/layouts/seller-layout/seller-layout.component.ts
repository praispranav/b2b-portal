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
      routerLink: "/seller/dashboard",
    },
    {
      label: "Profile",
      routerLink: "/seller/profile",
    },
    {
      label: "Products",
      toggle: "close",
      submenu: [
        {
          label: "Add Products",
          routerLink: "/seller/product/form-beign-adding",
        },
        {
          label: "Make Your Own Categories",
          routerLink: "/seller/category/category-list",
        },
        {
          label: "Ask For Brand Approval",
          routerLink: "/seller/brand-approval/brand-approval-list",
        },
      ],
    },
    {
      label: "Messages",
      toggle: "close",
      submenu: [
        {
          label: "Inbox [2]",
          routerLink: "/seller/email/inbox",
        },
        {
          label: "Sent",
          routerLink: "/seller/email/sent",
        },
        {
          label: "Spam",
          routerLink: "/seller/email/spam",
        },
        {
          label: "Flagged",
          routerLink: "/seller/email/flagged",
        },
      ],
    },
    {
      label: "Leads",
      routerLink: "/seller/dashboard",
    },
    // {
    //   path: "request-for-quotation",
    //   component: PageHomeRequestForQuotationComponent,
    // },
    {
      label: "Quotes Request",
      routerLink: "/b2b/request-for-quotation",
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
      routerLink: "/seller/dashboard",
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
          routerLink: "/seller/help/suggestion-list",
        },
      ],
    },
    {
      label: "My Buying Interests",
      routerLink: "/seller/buying-interest",
    },
    {
      label: "Supplier MyListing",
      routerLink: "/seller/supplier-list",
    },
  ];

  ngOnInit() {
    this.changeLayout('menu-pin');
    this.changeLayout('menu-behind');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }

}
