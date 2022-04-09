import { Routes } from '@angular/router';

import {
  AdminLayoutComponent,
  BlankLayoutComponent,
  BuyerLayoutComponent,
  SellerLayoutComponent,
} from "./@pages/layouts";

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-auth'
  },
  {
    path: 'user-auth',
    component: BlankLayoutComponent,
    loadChildren: './modules/user-auth/user-auth.module#UserAuthModule'
  },
  {
    path: 'view',
    loadChildren: './modules/view/view.module#ViewModule'
  },
  {
    path: '**',
    redirectTo: 'view',
  }
];