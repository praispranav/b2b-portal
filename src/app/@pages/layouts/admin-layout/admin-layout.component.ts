import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent extends RootLayout implements OnInit {
 
  menuLinks = [
    {
      label: "Admin Dashboard",
      routerLink: "/admin/dashboard",
    },
    {
      label: "Add Banner",
      routerLink: "#",
    },
    {
      label: "Seller/Buyer",
      toggle: "close",
      submenu: [
        {
          label: "Seller",
          routerLink: "#",
        },
        {
          label: "Buyer",
          routerLink: "#",
        },
        {
          label: "Buyer Live Status",
          routerLink: "#",
        },
        {
          label: "Seller Live Status",
          routerLink: "#",
        },
        {
          label: "MOQ",
          routerLink: "#",
        }
      ],
    },
    {
      label: "Product",
      toggle: "close",
      submenu: [
        {
          label: "Products For Approval",
          routerLink: "#",
        },
        {
          label: "Approval Status",
          routerLink: "#",
        },
        {
          label: "Brand Approval Requests",
          routerLink: "#",
        },
        {
          label: "Brands",
          routerLink: "#",
        },
        {
          label: "Limits For Free Seller",
          routerLink: "#",
        },
        {
          label: "Increase/Decrise Limit",
          routerLink: "#",
        }
      ],
    },
    {
      label: "Leads",
      toggle: "close",
      submenu: [
        {
          label: "RFQ Leads",
          routerLink: "#",
        },
        {
          label: "Associate CRM",
          routerLink: "#",
        },
        {
          label: "Verification Request",
          routerLink: "#",
        },
        {
          label: "Account Creation Requests",
          routerLink: "#",
        },
      ],
    },
    {
      label: "Partners",
      toggle: "close",
      submenu: [
        {
          label: "TP Agents",
          routerLink: "#",
        },
        {
          label: "Create new TP Agent",
          routerLink: "#",
        },
        {
          label: "Agents Portfolio",
          routerLink: "#",
        },
        {
          label: "Associates",
          routerLink: "#",
        },
        {
          label: "Create new Associates",
          routerLink: "#",
        },
        {
          label: "Associate Portfolio",
          routerLink: "#",
        },
      ],
    },
    {
      label: "Help",
      toggle: "close",
      submenu: [
        {
          label: "Complaints",
          routerLink: "/admin/help/complain-list",
        },
        {
          label: "Dispute",
          routerLink: "/admin/help/dispute-list",
        },
        {
          label: "Suggestions",
          routerLink: "/admin/help/suggestion-list",
        },
      ],
    },
    {
      label: "Location",
      toggle: "close",
      submenu: [
        {
          label: "Find Country",
          routerLink: "/admin/location/location-list",
        },
        {
          label: "Add New Location",
          routerLink: "/admin/location/location-add",
        },
        {
          label: "Add Pricing for Country",
          routerLink: "#",
        },
        {
          label: "Assign Trade Products",
          routerLink: "#",
        },
      ],
    },
    {
      label: "Categories",
      toggle: "close",
      submenu: [
        {
          label: "Find Categories",
          routerLink: "/admin/category/category-list",
        },
        {
          label: "Add Categories",
          routerLink: "/admin/category/category-add",
        },
        {
          label: "Add Filter",
          routerLink: "/admin/filter/filter-add",
        },
        {
          label: "Find Filter",
          routerLink: "/admin/filter/filter-list",
        },
      ],
    },
    {
      label: "News",
      toggle: "close",
      submenu: [
        {
          label: "Add News",
          routerLink: "#",
        },
        {
          label: "Create Categories",
          routerLink: "#",
        },
        {
          label: "Create Tags",
          routerLink: "#",
        },
      ],
    },
    {
      label: "Blogs",
      toggle: "close",
      submenu: [
        {
          label: "Create Tags",
          routerLink: "#",
        },
      ],
    },
    {
      label: "Trade Fair",
      toggle: "close",
      submenu: [
        {
          label: "Search Trade Shows",
          routerLink: "#",
        },
        {
          label: "Add Trade Shows",
          routerLink: "#",
        },
        {
          label: "Add Type",
          routerLink: "#",
        },
      ],
    },
    {
      label: "Brand",
      toggle: "close",
      submenu: [
        {
          label: "Search Brand",
          routerLink: "#",
        },
        {
          label: "Approve Brands",
          routerLink: "#",
        },
        {
          label: "Add Brands",
          routerLink: "#",
        },
      ],
    },
    {
      label: "Notice Bar",
      routerLink: "#",
    },
    {
      label: "Popular Q&A",
      toggle: "close",
      submenu: [
        {
          label: "Add Category",
          routerLink: "#",
        },
      ]
    },
  ];
 
  ngOnInit() {
    this.changeLayout('menu-pin');
    this.changeLayout('menu-behind');
    //Will sidebar close on screens below 1024
    this.autoHideMenuPin();
  }
  
}
