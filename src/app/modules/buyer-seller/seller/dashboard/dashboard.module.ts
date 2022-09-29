import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { pgTabsModule } from '../../../../@pages/components/tabs/tabs.module';
import { DashboardInfoComponent } from './components/dashboard-info/dashboard-info.component';
import { DashboradLastConversationComponent } from './components/dashborad-last-conversation/dashborad-last-conversation.component';
import { DashboradMrqsComponent } from './components/dashborad-mrqs/dashborad-mrqs.component';
import { DashboradPreviousInquiriesComponent } from './components/dashborad-previous-inquiries/dashborad-previous-inquiries.component';
import { DashboradRecommendedQuotationsComponent } from './components/dashborad-recommended-quotations/dashborad-recommended-quotations.component';
import { DashboradTableComponent } from './components/dashborad-table/dashborad-table.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';

@NgModule({
  declarations: [
    DashboardInfoComponent,
    DashboradLastConversationComponent,
    DashboradMrqsComponent,
    DashboradPreviousInquiriesComponent,
    DashboradRecommendedQuotationsComponent,
    DashboradTableComponent,
    PageDashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    pgTabsModule
  ]
})
export class DashboardModule { }
