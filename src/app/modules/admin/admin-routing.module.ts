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
    path: 'user-list',
    loadChildren: './user-verification-list/user-verification-list.module#UserVerificationListModule'
  },
  {
    path: 'product-verification',
    loadChildren: './product-verification/product-verification.module#ProductVerificationModule',
  },
  {
    path: 'brand-approval',
    loadChildren: './brand-approval-request/brand-approval-request.module#BrandApprovalRequestModule'
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
    path: 'admin-blog',
    loadChildren: '../admin/admin-blog/admin-blog.module#AdminBlogModule'
  },
  {
    path: 'admin-tradeShow',
    loadChildren: '../admin/admin-tradeshow/admin-tradeshow.module#AdminTradeshowModule'
  },
  {
    path: 'associate-profile',
    loadChildren: '../admin/associate-profile/associate-profile.module#AssociateProfileModule'
  },
  {
    path: 'agent-profile',
    loadChildren: '../admin/agent-profile/agent-profile.module#AgentProfileModule'
  },
  {
    path: 'cataloging',
    loadChildren: '../admin/cateloging/cateloging.module#CatelogingModule'
  },
  {
    path: 'seller-request',
    loadChildren: '../admin/seller-agent-request/seller-agent-request.module#SellerAgentRequestModule'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
