import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociateProfileAddComponent } from './associate-profile-add/associate-profile-add.component';
import { AssociateProfileListComponent } from './associate-profile-list/associate-profile-list.component';
import { AssociateProfileViewComponent } from './associate-profile-view/associate-profile-view.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"add-profile"
  },
  {
    path:"add-profile",
    component:AssociateProfileAddComponent
  },
  {
    path:"list",
    component:AssociateProfileListComponent
  },
  {
    path:"view",
    component:AssociateProfileViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociateProfileRoutingModule { }
