import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageChangePasswordComponent } from "./seller/page-change-password/page-change-password.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
  {
    path: "dashboard",
    loadChildren: "./buyer/dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "profile",
    loadChildren: "./buyer/profile/profile.module#ProfileModule",
  },
  {
    path: "help",
    loadChildren: "../../features/help/help.module#HelpModule",
  },
  {
    path: "email",
    loadChildren:"../../features/email/email.module#EmailModule"
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
export class BuyerRoutingModule {}
