import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityControlRoutingModule } from './quality-control-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ManageComponent } from './manage/manage.component';
import { QualityControlComponent } from './quality-control.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ManageComponent,
    QualityControlComponent
  ],
  imports: [
    CommonModule,
    QualityControlRoutingModule
  ]
})
export class QualityControlModule { }
