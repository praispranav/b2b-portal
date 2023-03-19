import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerAgentRequestRoutingModule } from './seller-agent-request-routing.module';
import { RequestedSellerComponent } from './requested-seller/requested-seller.component';


@NgModule({
  declarations: [RequestedSellerComponent],
  imports: [
    CommonModule,
    SellerAgentRequestRoutingModule
  ]
})
export class SellerAgentRequestModule { }
