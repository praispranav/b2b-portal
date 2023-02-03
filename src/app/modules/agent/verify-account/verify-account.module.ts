import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyAccountRoutingModule } from './verify-account-routing.module';
// import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { VerifyAcoountListComponent } from './verify-acoount-list/verify-acoount-list.component';


@NgModule({
  declarations: [VerifyAcoountListComponent],
  imports: [
    CommonModule,
    VerifyAccountRoutingModule
  ]
})
export class VerifyAccountModule { }
