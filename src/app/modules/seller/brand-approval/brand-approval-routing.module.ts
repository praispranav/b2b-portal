import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBrandApprovalAddComponent } from "./page-brand-approval-add/page-brand-approval-add.component";
import { PageBrandApprovalListComponent } from "./page-brand-approval-list/page-brand-approval-list.component";
import { PageBrandApprovalViewComponent } from "./page-brand-approval-view/page-brand-approval-view.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "brand-approval-add",
  },
  {
    path: "brand-approval-add",
    component: PageBrandApprovalAddComponent
  },
  {
    path: "brand-approval-list",
    component: PageBrandApprovalListComponent
  },
  {
    path: "brand-approval-view",
    component: PageBrandApprovalViewComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandApprovalRoutingModule { }
