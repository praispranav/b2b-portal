import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { pgTabsModule } from '../../../../@pages/components/tabs/tabs.module';
import { DashboardLastConversationComponent } from './component/dashboard-last-conversation/dashboard-last-conversation.component';
import { DashboardLastMqrsComponent } from './component/dashboard-last-mqrs/dashboard-last-mqrs.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';

@NgModule({
  declarations: [
    DashboardLastConversationComponent,
    DashboardLastMqrsComponent,
    PageDashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    pgTabsModule
  ]
})
export class DashboardModule { }
