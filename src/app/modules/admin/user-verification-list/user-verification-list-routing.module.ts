import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerViewComponent } from './buyer-view/buyer-view.component';
import { UserVerificationListComponent } from './user-verification-list/user-verification-list.component';
import { UserVerificationVewComponent } from './user-verification-vew/user-verification-vew.component';



const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "user-list"
},
{
    path: "user-list",
    component: UserVerificationListComponent
},
{
  path: "user-view",
  component: UserVerificationVewComponent
},
{
  path: "buyer-view",
  component: BuyerViewComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserVerificationListRoutingModule { }
