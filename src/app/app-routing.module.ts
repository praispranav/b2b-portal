import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AdminLayoutComponent } from 'src/app/shared/layouts/layout-structures/admin-layout/admin-layout.component';
import { BuyerLayoutComponent } from 'src/app/shared/layouts/layout-structures/buyer-layout/buyer-layout.component';
import { SellerLayoutComponent } from 'src/app/shared/layouts/layout-structures/seller-layout/seller-layout.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'admin-auth',
    loadChildren: () =>
      import('./modules/admin-auth/admin-auth.module').then((m) => m.AdminAuthModule),
  },
  {
    path: 'buyer',
    component: BuyerLayoutComponent,
    loadChildren: () =>
      import('./modules/buyer/buyer.module').then((m) => m.BuyerModule),
  },
  {
    path: 'buyer-auth',
    loadChildren: () =>
      import('./modules/buyer-auth/buyer-auth.module').then((m) => m.BuyerAuthModule),
  },
  {
    path: 'seller',
    component: SellerLayoutComponent,
    loadChildren: () =>
      import('./modules/seller/seller.module').then((m) => m.SellerModule),
  },
  {
    path: 'seller-auth',
    loadChildren: () =>
      import('./modules/seller-auth/seller-auth.module').then((m) => m.SellerAuthModule),
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./modules/view/view.module').then((m) => m.ViewModule),
  },
  {
    path: '**',
    redirectTo: 'view',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
