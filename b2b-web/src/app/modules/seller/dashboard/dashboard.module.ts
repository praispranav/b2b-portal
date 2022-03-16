import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardV2Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
