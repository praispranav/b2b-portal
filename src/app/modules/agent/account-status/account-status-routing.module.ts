import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountStatusListComponent } from './account-status-list/account-status-list.component';


const routes: Routes = [
  {
      path: "",
      pathMatch: "full",
      redirectTo: "list"
  },
  {
      path: "list",
      component: AccountStatusListComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountStatusRoutingModule { }
