import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageInspectionServiceComponent } from "./page-inspection-service/page-inspection-service.component";
import { PageLogisticSolutionsComponent } from "./page-logistic-solutions/page-logistic-solutions.component";
import { PageSupplierBackgroundSearchComponent } from "./page-supplier-background-search/page-supplier-background-search.component";
import { PageSupplierReportComponent } from "./page-supplier-report/page-supplier-report.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inspection-service',
    pathMatch: 'full',
  },
  {
    path: 'inspection-service',
    component: PageInspectionServiceComponent,
  },
  {
    path: 'logistic-solutions',
    component: PageLogisticSolutionsComponent,
  },
  {
    path: 'supplier-background-search',
    component: PageSupplierBackgroundSearchComponent,
  },
  {
    path: 'supplier-report',
    component: PageSupplierReportComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeServicesRoutingModule { }
