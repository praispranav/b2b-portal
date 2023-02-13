import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile/add-profile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';


const routes: Routes = [
  {
      path: "",
      pathMatch: "full",
      redirectTo: "view"
  },
  {
      path: "view",
      component: ProfileViewComponent
  },
  {
    path: "add-profile",
    component: AddProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
