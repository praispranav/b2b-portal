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
    loadChildren: './agent-dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'profile',
    loadChildren: './agent-profile/profile.module#ProfileModule'
  },
  {
    path: 'account',
    loadChildren: './seller-account/account.module#AccountModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
