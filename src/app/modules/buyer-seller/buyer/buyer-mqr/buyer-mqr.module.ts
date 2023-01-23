import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerMqrRoutingModule } from './buyer-mqr-routing.module';
import { MqrListComponent } from './mqr-list/mqr-list.component';


@NgModule({
  declarations: [MqrListComponent],
  imports: [
    CommonModule,
    BuyerMqrRoutingModule
  ]
})
export class BuyerMqrModule { }
