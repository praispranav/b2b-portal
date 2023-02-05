import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatelogingRoutingModule } from './cateloging-routing.module';
// import { ReauestedCatelogingComponent } from './reauested-cateloging/reauested-cateloging.component';
import { RequestedCatelogingComponent } from './requested-cateloging/requested-cateloging.component';


@NgModule({
  declarations: [RequestedCatelogingComponent],
  imports: [
    CommonModule,
    CatelogingRoutingModule
  ]
})
export class CatelogingModule { }
