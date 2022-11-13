import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: './admin-dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'category',
    loadChildren: './category/category.module#CategoryModule',
  },
  {
    path: 'filter',
    loadChildren: './filter/filter.module#FilterModule',
  },
  {
    path: 'location',
    loadChildren: './location/location.module#LocationModule',
  },
  {
    path: 'help',
    loadChildren: '../../features/help/help.module#HelpModule',
  },
  {
    path: 'notice-bar',
    loadChildren: './notice-bar/notice-bar.module#NoticeBarModule',
  },
  {
    path: 'faq',
    loadChildren: './faq/faq.module#FaqModule',
  },
  {
    path: 'product-verification',
    loadChildren: './product-verification/product-verification.module#ProductVerificationModule',
  },
  {
    path: 'mqr',
    loadChildren: './mqr/mqr.module#MqrModule',
  },
  {
    path: 'buyer-sellers-admin',
    loadChildren: './buyer-sellers-admin/buyer-sellers-admin.module#BuyerSellersAdminModule',
  },
  {
    path:'admin-blog',
    loadChildren:'../admin/admin-blog/admin-blog.module#AdminBlogModule'
  },
  {
    path:'admin-tradeShow',
    loadChildren:'../admin/admin-tradeshow/admin-tradeshow.module#AdminTradeshowModule'
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
