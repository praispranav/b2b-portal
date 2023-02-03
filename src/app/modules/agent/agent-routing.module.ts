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
    path: 'assign-account',
    loadChildren: './assign-account/assign-account.module#AssignAccountModule'
  },
  {
    path: 'verify-account',
    loadChildren: './verify-account/verify-account.module#VerifyAccountModule'
  },
  {
    path: 'account-status',
    loadChildren: './account-status/account-status.module#AccountStatusModule'
  },
  {
    path: 'help',
    loadChildren: '../../features/help/help.module#HelpModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
