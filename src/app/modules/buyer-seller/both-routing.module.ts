import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
  {
    path: "brand-approval",
    loadChildren: "./both/brand-approval/brand-approval.module#BrandApprovalModule",
  },
  {
    path: "category",
    loadChildren: "./both/category/category.module#CategoryModule",
  },
  {
    path: "dashboard",
    loadChildren: "./both/dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "product",
    loadChildren: "./both/product/product.module#ProductModule",
  },
  {
    path: "profile",
    loadChildren: "./both/profile/profile.module#ProfileModule",
  },
  {
    path: "quote-request",
    loadChildren: "./both/quote-request/quote-request.module#QuoteRequestModule",
  },
  {
    path: "help",
    loadChildren: "../../features/help/help.module#HelpModule",
  },
  {
    path: "email",
    loadChildren:"../../features/email/email.module#EmailModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BothRoutingModule {}
