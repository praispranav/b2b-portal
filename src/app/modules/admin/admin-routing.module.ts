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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
