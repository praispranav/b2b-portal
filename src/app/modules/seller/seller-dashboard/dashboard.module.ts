import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PreviousInquiriesComponent } from './components/previous-inquiries/previous-inquiries.component';
import { TableComponent } from './components/table/table.component';
import { LastConversationComponent } from './components/last-conversation/last-conversation.component';
import { MrqsComponent } from './components/mrqs/mrqs.component';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';
import { RecommendedQuotationsComponent } from './components/recommended-quotations/recommended-quotations.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [PageDashboardComponent, PreviousInquiriesComponent, TableComponent, LastConversationComponent, MrqsComponent, RecommendedQuotationsComponent, InfoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    pgTabsModule
  ]
})
export class DashboardModule { }
