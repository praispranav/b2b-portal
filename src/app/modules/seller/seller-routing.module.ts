import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "seller-dashboard",
  },
  {
    path: "brand-approval",
    loadChildren: "./brand-approval/brand-approval.module#BrandApprovalModule",
  },
  {
    path: "buyer-dashboard",
    loadChildren: "./buyer-dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "buyer-profile",
    loadChildren: "./seller-dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "product",
    loadChildren: "./product/product.module#ProductModule",
  },
  {
    path: "category",
    loadChildren: "./seller-category/category.module#CategoryModule",
  },
  {
    path: "seller-dashboard",
    loadChildren: "./seller-dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "seller-profile",
    loadChildren: "./seller-profile/profile.module#ProfileModule",
  },
  {
    path: "trade-services",
    loadChildren: "./trade-services/trade-services.module#TradeServicesModule",
  },
  {
    path: "help",
    loadChildren: "../../features/help/help.module#HelpModule",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
