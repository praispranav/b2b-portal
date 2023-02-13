import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatelogingRoutingModule } from './cateloging-routing.module';
// import { ReauestedCatelogingComponent } from './reauested-cateloging/reauested-cateloging.component';
import { RequestedCatelogingComponent } from './requested-cateloging/requested-cateloging.component';
import { AssginCatelogingModalComponent } from './assgin-cateloging-modal/assgin-cateloging-modal.component';


@NgModule({
  declarations: [RequestedCatelogingComponent, AssginCatelogingModalComponent],
  imports: [
    CommonModule,
    CatelogingRoutingModule
  ]
})
export class CatelogingModule { }
