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
      label: "Add Banners",
      routerLink: "buyer-profile",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Seller/Buyers",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Seller ",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Buyers",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Buyers Live Status",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Sellers Live status",
          routerLink: "buyer-dashboard",
        },
        {
          label: "MOQ",
          routerLink: "buyer-dashboard",
        },
      ],
    },
    {
      label: "Product",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Products For Approval ",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Approval Status",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Brand Approval Requests",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Brands",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Limits For Free Seller",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Limits For Free Seller",
          routerLink: "buyer-dashboard",
        },
      ],
    },
    {
      label: "Leads",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "RFQ Leads",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Associate CRM",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Verification Request",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Account Creation Requests",
          routerLink: "buyer-dashboard",
        }
      ],
    },
    {
      label: "Partners",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "TP Agents",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Craete new TP Agent",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Agents Portfolio",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Associates",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Craete new Associate",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Associate Protfolio",
          routerLink: "buyer-dashboard",
        }
      ],
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
    {
      label: "Locations",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Find Country",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Add New Location",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Add Pricing for Country",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Assign Trade Products",
          routerLink: "buyer-dashboard",
        }
      ],
    },
    {
      label: "Categories",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Find Categories",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Add Category",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Add filter",
          routerLink: "buyer-dashboard",
        }

      ],
    },
    {
      label: "News",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Add News",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Create Categories",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Create Tags",
          routerLink: "buyer-dashboard",
        }
      ],
    },

    {
      label: "Blogs-Defale Countries/Cetegory",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Create Tags",
          routerLink: "buyer-dashboard",
        }
      ],
    },
    {
      label: "Trade Fair",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Search Trade Shows",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Add Trade Shows",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Add Type",
          routerLink: "buyer-dashboard",
        }
      ],
    },
    {
      label: "Brand",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Search Brand",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Approve Brands",
          routerLink: "buyer-dashboard",
        },
        {
          label: "Add Brands",
          routerLink: "buyer-dashboard",
        }
      ],
    },
    {
      label: "Notice Bar",
      routerLink: "seller-dashboard",
      iconType: "fi",
      iconName: "shield",
    },
    {
      label: "Popular Questions And Answers",
      toggle: "close",
      iconType: "fi",
      iconName: "shield",
      submenu: [
        {
          label: "Add Category",
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
