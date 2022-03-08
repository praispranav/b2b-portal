import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./modules/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "buyer",
    loadChildren: () =>
      import("./modules/buyer/buyer.module").then((m) => m.BuyerModule),
  },
  {
    path: "seller",
    loadChildren: () =>
      import("./modules/seller/seller.module").then((m) => m.SellerModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
