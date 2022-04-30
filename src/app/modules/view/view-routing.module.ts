import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageContactUsComponent } from './page-contact-us/page-contact-us.component';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';
import { PagePartnerComponent } from './page-partner/page-partner.component';
import { PageSupportComponent } from './page-support/page-support.component';
import { PageTermsAndConditionComponent } from './page-terms-and-condition/page-terms-and-condition.component';
import { PageTermsOfUseComponent } from './page-terms-of-use/page-terms-of-use.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: PageAboutUsComponent,
  },
  {
    path: 'contact-us',
    component: PageError500Component,
  },
  {
    path: 'error-404',
    component: PageError500Component,
  },
  {
    path: 'error-500',
    component: PageError500Component,
  },
  {
    path: 'partner',
    component: PagePartnerComponent,
  },
  {
    path: 'support',
    component: PageSupportComponent,
  },
  {
    path: 'terms-and-condition',
    component: PageTermsAndConditionComponent,
  },
  {
    path: 'terms-of-use',
    component: PageTermsOfUseComponent,
  },
  {
    path: "trade-services",
    loadChildren: "./trade-services/trade-services.module#TradeServicesModule",
  },
  {
    path: '**',
    redirectTo: 'error-404',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
