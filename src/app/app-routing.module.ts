import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AdminLayoutComponent } from 'src/app/shared/layouts/layout-structures/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from 'src/app/shared/layouts/layout-structures/auth-layout/auth-layout.component';
import { BuyerLayoutComponent } from 'src/app/shared/layouts/layout-structures/buyer-layout/buyer-layout.component';
import { SellerLayoutComponent } from 'src/app/shared/layouts/layout-structures/seller-layout/seller-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'buyer',
    component: BuyerLayoutComponent,
    loadChildren: () =>
      import('./modules/buyer/buyer.module').then((m) => m.BuyerModule),
  },
  {
    path: 'seller',
    component: SellerLayoutComponent,
    loadChildren: () =>
      import('./modules/seller/seller.module').then((m) => m.SellerModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
