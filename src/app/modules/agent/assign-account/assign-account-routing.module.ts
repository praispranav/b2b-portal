import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignAccountDetailsComponent } from './assign-account-details/assign-account-details.component';
import { AssignAccountListComponent } from './assign-account-list/assign-account-list.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "assign-account-list"
  },
  {
    path: "assign-account-list",
    component: AssignAccountListComponent
  },
  {
    path: "assign-account-details",
    component: AssignAccountDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignAccountRoutingModule { }
