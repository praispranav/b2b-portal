import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociateProfileAddComponent } from './associate-profile-add/associate-profile-add.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"add-profile"
  },
  {
    path:"add-profile",
    component:AssociateProfileAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociateProfileRoutingModule { }
