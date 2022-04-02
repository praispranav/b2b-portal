import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyDetailRoutingModule } from './company-detail-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ManageComponent } from './manage/manage.component';
import { CompanyDetailComponent } from './company-detail.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ManageComponent,
    CompanyDetailComponent
  ],
  imports: [
    CommonModule,
    CompanyDetailRoutingModule
  ]
})
export class CompanyDetailModule { }
