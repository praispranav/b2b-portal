import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "category",
    loadChildren: () =>
      import("./category/category.module").then((m) => m.CategoryModule),
  },
  {
    path: "location",
    loadChildren: () =>
      import("./location/location.module").then((m) => m.LocationModule),
  },
  {
    path: "membership",
    loadChildren: () =>
      import("./membership/membership.module").then((m) => m.MembershipModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
