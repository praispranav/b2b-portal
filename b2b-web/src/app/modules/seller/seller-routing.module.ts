import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerComponent } from './seller.component';

const routes: Routes = [
  {
    path: '',
    component: SellerComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard-v2',
        pathMatch: 'full'
      },
      {
        path: 'dashboard-v2',
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "certificate-center",
        loadChildren: () =>
          import("./certificate-center/certificate-center.module").then((m) => m.CertificateCenterModule),
      },
      {
        path: "company-detail",
        loadChildren: () =>
          import("./company-detail/company-detail.module").then((m) => m.CompanyDetailModule),
      },
      {
        path: "company-profile",
        loadChildren: () =>
          import("./company-profile/company-profile.module").then((m) => m.CompanyProfileModule),
      },
      {
        path: "export-capablities",
        loadChildren: () =>
          import("./export-capabilities/export-capabilities.module").then((m) => m.ExportCapabilitiesModule),
      },
      {
        path: "quality-control",
        loadChildren: () =>
          import("./quality-control/quality-control.module").then((m) => m.QualityControlModule),
      },
      {
        path: "randd-capacity",
        loadChildren: () =>
          import("./r-and-d-capacity/r-and-d-capacity.module").then((m) => m.RAndDCapacityModule),
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
