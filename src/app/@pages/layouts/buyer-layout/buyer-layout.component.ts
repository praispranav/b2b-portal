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
      label: "Home",
      routerLink: "buyer-dashboard",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Profile",
      routerLink: "buyer-profile",
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
          routerLink: "buyer-dashboard",
        },
        {
          label: "Sent",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Spam",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Flagged",
          routerLink: "buyer-dashboard",
        },
      ],
    },
    {
      label: "Buying Offers",
      routerLink: "buyer-dashboard",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Multiple Quotes Request",
      routerLink: "buyer-dashboard",
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
          routerLink: "trade-services/logistic-solutions",
          iconType: "letter",
          iconName: "dl",
        },
        {
          label: "Inspection Service",
          routerLink: "trade-services/inspection-service",
          iconType: "letter",
          iconName: "sl",
        },
        {
          label: "Suppiler Report",
          routerLink: "trade-services/supplier-report",
          iconType: "letter",
          iconName: "bl",
        },
        {
          label: "Suppiler Background Search",
          routerLink: "trade-services/supplier-background-search",
          iconType: "letter",
          iconName: "bl",
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
          routerLink: "buyer-dashboard",
          iconType: "letter",
          iconName: "dl",
        },
        {
          label: "Disputes",
          routerLink: "buyer-dashboard",
          iconType: "letter",
          iconName: "sl",
        },
        {
          label: "Suggestions",
          routerLink: "buyer-dashboard",
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
