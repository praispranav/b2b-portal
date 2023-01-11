import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandApprovalListComponent } from './brand-approval-list/brand-approval-list.component';


const routes: Routes = [
  {
      path: "",
      pathMatch: "full",
      redirectTo: "brand-approval-list"
  },
  {
      path: "brand-approval-list",
      component: BrandApprovalListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandApprovalRequestRoutingModule { }
