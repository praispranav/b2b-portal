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
      routerLink: "/admin/dashboard",
    },
    {
      label: "Supplier/Buyer",
      toggle: "close",
      submenu: [
        {
          label: "User",
          routerLink: "/admin/user-list/user-list",
          
        },
        // {
        //   label: "Buyer",
        //   routerLink: "/admin/dashboard",
        // },
        {
          label: "Buyer Live Status",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Seller Live Status",
          routerLink: "/admin/dashboard",
        },
        // {
        //   label: "RFQ",
        //   routerLink: "/admin/mqr/mqr-list",
        // },
        // {
        //   label: "Product Verification",
        //   routerLink: "/admin/product-verification",
        // }
      ],
    },

    {
      label: "Product",
      toggle: "close",
      submenu: [
        {
          label: "Products For Approval",
          routerLink: "/admin/product-verification",
        },
        {
          label: "Approval Status",
          routerLink: "/admin/dashboard",
        },
        // {
        //   label: "Brand Approval Requests",
        //   routerLink: "/admin/brand-approval/brand-approval-list",
        // },
        // {
        //   label: "Brands",
        //   routerLink: "/admin/dashboard",
        // },
        {
          label: "Limits For Free Seller",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Increase/Decrise Limit",
          routerLink: "/admin/dashboard",
        }
      ],
    },
    {
      label: "Brand",
      toggle: "close",
      submenu: [
        {
          label: "Brand Approval Requests",
          routerLink: "/admin/brand-approval/brand-approval-list",
        },
        {
          label: "Search Brand",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Approve Brands",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Add Brands",
          routerLink: "/admin/dashboard",
        },
      ],
    },
    {
      label: "Leads",
      toggle: "close",
      submenu: [
        {
          label: "RFQ Leads",
          routerLink: "/admin/mqr/mqr-list",
        },
        {
          label: "Associate CRM",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Verification Request",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Account Creation Requests",
          routerLink: "/admin/dashboard",
        },
      ],
    },
    {
      label: "Cateloging",
      toggle: "close",
      submenu: [
        {
          label: "Requested Cateloging",
          routerLink: "/admin/cataloging/requested-cateloging",
        },
      
      ],
    },
    {
      label: "Partners",
      toggle: "close",
      submenu: [
        {
          label: "TP Agents",
          routerLink: "admin/agent-profile/view",
        },
        {
          label: "Create new TP Agent",
          routerLink: "/admin/agent-profile",
        },
        {
          label: "Agents Portfolio",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Associates",
          routerLink: "/admin/associate-profile/list",
        },
        {
          label: "Create new Associates",
          routerLink: "/admin/associate-profile/add-profile",
        },
        {
          label: "Associate Portfolio",
          routerLink: "/admin/dashboard",
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
          routerLink: "/admin/location/location-add/location",
        },
        {
          label: "Add Pricing for Country",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Assign Trade Products",
          routerLink: "/admin/dashboard",
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
          label: "Find Filter",
          routerLink: "/admin/filter/filter-list",
        },
        {
          label: "Add Filter",
          routerLink: "/admin/filter/filter-add",
        },
      ],
    },
    {
      label: "News",
      toggle: "close",
      submenu: [
        {
          label: "Add News",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Create Categories",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Create Tags",
          routerLink: "/admin/dashboard",
        },
      ],
    },
    {
      label: "Blogs",
      toggle: "close",
      submenu: [
        {
          label: "Add Blog",
          routerLink: "/admin/add-blog",
        },
      ],
    },
    {
      label: "Trade Fair",
      toggle: "close",
      submenu: [
        {
          label: "Search Trade Shows",
          routerLink: "/admin/dashboard",
        },
        {
          label: "Add Trade Shows",
          routerLink: "/admin/admin-tradeShow/add-trade-show",
        },
        {
          label: "Add Type",
          routerLink: "/admin/dashboard",
        },
      ],
    },
    // {
    //   label: "Brand",
    //   toggle: "close",
    //   submenu: [
    //     {
    //       label: "Brand Approval Requests",
    //       routerLink: "/admin/brand-approval/brand-approval-list",
    //     },
    //     {
    //       label: "Search Brand",
    //       routerLink: "/admin/dashboard",
    //     },
    //     {
    //       label: "Approve Brands",
    //       routerLink: "/admin/dashboard",
    //     },
    //     {
    //       label: "Add Brands",
    //       routerLink: "/admin/dashboard",
    //     },
    //   ],
    // },
    {
      label: "Notice Bar",
      routerLink: "/admin/notice-bar",
    },
    {
      label: "Popular Q&A",
      toggle: "close",
      submenu: [
        {
          label: "Add Category",
          routerLink: "/admin/faq",
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
