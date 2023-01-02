import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserVerificationListComponent } from './user-verification-list/user-verification-list.component';



const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "user-list"
},
{
    path: "user-list",
    component: UserVerificationListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserVerificationListRoutingModule { }
