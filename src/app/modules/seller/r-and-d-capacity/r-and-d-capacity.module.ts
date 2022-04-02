import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RAndDCapacityRoutingModule } from './r-and-d-capacity-routing.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { DetailComponent } from './detail/detail.component';
import { RAndDCapacityComponent } from './r-and-d-capacity.component';


@NgModule({
  declarations: [
    ListComponent,
    ManageComponent,
    DetailComponent,
    RAndDCapacityComponent
  ],
  imports: [
    CommonModule,
    RAndDCapacityRoutingModule,
    FormsModule
  ]
})
export class RAndDCapacityModule { }
