import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
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
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
