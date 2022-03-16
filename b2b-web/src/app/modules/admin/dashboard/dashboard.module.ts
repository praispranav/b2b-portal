import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardV1Component } from './dashboard-v1/dashboard-v1.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardV1Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
