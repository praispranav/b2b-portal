import { Routes } from "@angular/router";
// import { AdminLayoutComponent } from './common-shared/layouts/layout-structures/admin-layout/admin-layout.component';
// import { BuyerLayoutComponent } from './common-shared/layouts/layout-structures/buyer-layout/buyer-layout.component';
// import { SellerLayoutComponent } from './common-shared/layouts/layout-structures/seller-layout/seller-layout.component';

export const AppRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "user-auth",
  },
  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   loadChildren: './modules/admin/admin.module#AdminModule'
  // },
  // {
  //   path: 'buyer',
  //   component: BuyerLayoutComponent,
  //   loadChildren: './modules/buyer/buyer.module#BuyerModule'
  // },
  // {
  //   path: 'seller',
  //   component: SellerLayoutComponent,
  //   loadChildren: './modules/seller/seller.module#SellerModule'
  // },
  {
    path: "user-auth",
    loadChildren: "./modules/user-auth/user-auth.module#UserAuthModule",
  },
  // {
  //   path: 'view',
  //   loadChildren: './modules/view/view.module#ViewModule'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'view',
  // },
];
