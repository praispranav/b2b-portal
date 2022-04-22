import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'brand-approval',
    loadChildren: './seller-dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'buyer-profile',
    loadChildren: './seller-dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'product',
    loadChildren: './seller-dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'category',
    loadChildren: './seller-dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'seller-dashboard',
    loadChildren: './seller-dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'seller-profile',
    loadChildren: './seller-profile/profile.module#ProfileModule'
  },
  {
    path: 'trade-services',
    loadChildren: './seller-profile/profile.module#ProfileModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
