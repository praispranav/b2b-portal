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
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'help',
    loadChildren: '../../features/help/help.module#HelpModule'
  },
  {
    path:'supplier-catalogue-request',
    loadChildren:'./supplier-catalogue-request/supplier-catalogue-request.module#SupplierCatalogueRequestModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociateRoutingModule { }
