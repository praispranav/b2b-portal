import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardInfoComponent } from './components/dashboard-info/dashboard-info.component';
import { DashboardTablesComponent } from './components/dashboard-tables/dashboard-tables.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { SellerDetailsComponent } from '../seller-details/seller-details.component';

@NgModule({
  declarations: [
    PageDashboardComponent,
    DashboardInfoComponent,
    DashboardTablesComponent,
    SellerDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
