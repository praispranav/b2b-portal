import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { pgTabsModule } from '../../../../@pages/components/tabs/tabs.module';
import { PageDashboardLastConversationComponent } from './page-dashboard/component/page-dashboard-last-conversation/page-dashboard-last-conversation.component';
import { PageDashboardMqrsComponent } from './page-dashboard/component/page-dashboard-mqrs/page-dashboard-mqrs.component';



@NgModule({
  declarations: [PageDashboardComponent, PageDashboardLastConversationComponent, PageDashboardMqrsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    pgTabsModule
  ]
})
export class DashboardModule { }
