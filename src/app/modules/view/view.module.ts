import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageContactUsComponent } from './page-contact-us/page-contact-us.component';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';
import { PagePartnerComponent } from './page-partner/page-partner.component';
import { PageSupportComponent } from './page-support/page-support.component';
import { PageTermsAndConditionComponent } from './page-terms-and-condition/page-terms-and-condition.component';
import { PageTermsOfUseComponent } from './page-terms-of-use/page-terms-of-use.component';
import { pgCollapseModule } from '../../@pages/components/collapse';


@NgModule({
  declarations: [
    PageAboutUsComponent,
    PageContactUsComponent,
    PageError404Component,
    PageError500Component,
    PagePartnerComponent,
    PageSupportComponent,
    PageTermsAndConditionComponent,
    PageTermsOfUseComponent,
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    pgCollapseModule
  ]
})
export class ViewModule { }
