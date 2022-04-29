import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TradeServicesRoutingModule } from "./trade-services-routing.module";
import { PageInspectionServiceComponent } from "./page-inspection-service/page-inspection-service.component";
import { PageLogisticSolutionsComponent } from "./page-logistic-solutions/page-logistic-solutions.component";
import { PageSupplierBackgroundSearchComponent } from "./page-supplier-background-search/page-supplier-background-search.component";
import { PageSupplierReportComponent } from "./page-supplier-report/page-supplier-report.component";

@NgModule({
  declarations: [
    PageInspectionServiceComponent,
    PageLogisticSolutionsComponent,
    PageSupplierBackgroundSearchComponent,
    PageSupplierReportComponent,
  ],
  imports: [CommonModule, TradeServicesRoutingModule],
})
export class TradeServicesModule {}
