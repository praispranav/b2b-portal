import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { pgTabsModule } from '../../../../@pages/components/tabs/tabs.module';
import { DashboardInfoComponent } from './components/dashboard-info/dashboard-info.component';
import { DashboardLastConversationComponent } from './components/dashboard-last-conversation/dashboard-last-conversation.component';
import { DashboardMrqsComponent } from './components/dashboard-mrqs/dashboard-mrqs.component';
import { DashboardPreviousInquiriesComponent } from './components/dashboard-previous-inquiries/dashboard-previous-inquiries.component';
import { DashboardRecommendedQuotationsComponent } from './components/dashboard-recommended-quotations/dashboard-recommended-quotations.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { Footer1Component } from '../../../view/components/footer1/footer1.component';
import { Footer2Component } from '../../../view/components/footer2/footer2.component';

@NgModule({
  declarations: [
    DashboardInfoComponent,
    DashboardLastConversationComponent,
    DashboardMrqsComponent,
    DashboardPreviousInquiriesComponent,
    DashboardRecommendedQuotationsComponent,
    DashboardTableComponent,
    PageDashboardComponent,
    Footer1Component,
    Footer2Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    pgTabsModule
  ]
})
export class DashboardModule { }
