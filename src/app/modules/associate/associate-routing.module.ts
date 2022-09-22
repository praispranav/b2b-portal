import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard",
  },
  {
    path: 'dashboard',
    loadChildren: './associate-dashboard/dashboard.module#DashboardModule'
  },
  // {
  //   path: 'profile',
  //   loadChildren: './associate-profile/profile.module#ProfileModule'
  // },
  {
    path: 'help',
    loadChildren: '../../features/help/help.module#HelpModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociateRoutingModule { }
