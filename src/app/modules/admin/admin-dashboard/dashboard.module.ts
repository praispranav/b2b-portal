import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { AdminDashboardInfoComponent } from './components/admin-dashboard-info/admin-dashboard-info.component';
import { AdminDashboardTablesComponent } from './components/admin-dashboard-tables/admin-dashboard-tables.component';


@NgModule({
  declarations: [PageDashboardComponent, AdminDashboardInfoComponent, AdminDashboardTablesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
