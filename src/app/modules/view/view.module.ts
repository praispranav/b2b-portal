import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { pgCardModule } from "../../@pages/components/card/card.module";
import { SharedModule } from "../../@pages/components/shared.module";

import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageContactUsComponent } from './page-contact-us/page-contact-us.component';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';
import { PageInspectionServiceComponent } from "./page-inspection-service/page-inspection-service.component";
import { PageLogisticSolutionsComponent } from "./page-logistic-solutions/page-logistic-solutions.component";
import { PagePartnerComponent } from './page-partner/page-partner.component';
import { PageSupplierBackgroundSearchComponent } from "./page-supplier-background-search/page-supplier-background-search.component";
import { PageSupplierReportComponent } from "./page-supplier-report/page-supplier-report.component";
import { PageSupportComponent } from './page-support/page-support.component';
import { PageTermsAndConditionComponent } from './page-terms-and-condition/page-terms-and-condition.component';
import { PageTermsOfUseComponent } from './page-terms-of-use/page-terms-of-use.component';

@NgModule({
  declarations: [
    PageAboutUsComponent,
    PageContactUsComponent,
    PageError404Component,
    PageError500Component,
    PageInspectionServiceComponent,
    PageLogisticSolutionsComponent,
    PagePartnerComponent,
    PageSupplierBackgroundSearchComponent,
    PageSupplierReportComponent,
    PageSupportComponent,
    PageTermsAndConditionComponent,
    PageTermsOfUseComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    pgCardModule,
    SharedModule,
  ]
})
export class ViewModule { }
