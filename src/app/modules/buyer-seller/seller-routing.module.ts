import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageChangePasswordComponent } from "./seller/page-change-password/page-change-password.component";
// import {  } from "./seller/supplier-list/supplier-list.module";
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
  {
    path: "brand-approval",
    loadChildren: "./seller/brand-approval/brand-approval.module#BrandApprovalModule",
  },
  {
    path: "category",
    loadChildren: "./seller/category/category.module#CategoryModule",
  },
  {
    path: "dashboard",
    loadChildren: "./seller/dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "product",
    loadChildren: "./seller/product/product.module#ProductModule",
  },

  {
    path: "supplier-list",
    loadChildren: "./seller/supplier-list/supplier-list.module#SupplierListModule",
  },
  {
    path: "buying-interest",
    loadChildren: "./seller/buying-interest/buying-interest.module#BuyingInterestModule",
  },
  {
    path: "profile",
    loadChildren: "./seller/profile/profile.module#ProfileModule",
  },
  
  // {
  //   path: "quote-request",
  //   loadChildren: "./seller/quote-request/quote-request.module#QuoteRequestModule",
  // },

  {
    path: "help",
    loadChildren: "../../features/help/help.module#HelpModule",
  },
  {
    path: "email",
    loadChildren: "./seller/email-seller/email.module#EmailSellerModule"
  },
  // {
  //   path: "change-password",
  //   component: PageChangePasswordComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule { }
