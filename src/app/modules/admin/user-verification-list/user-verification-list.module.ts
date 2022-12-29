import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserVerificationListRoutingModule } from './user-verification-list-routing.module';
import { UserVerificationListComponent } from './user-verification-list/user-verification-list.component';


@NgModule({
  declarations: [UserVerificationListComponent],
  imports: [
    CommonModule,
    UserVerificationListRoutingModule
  ]
})
export class UserVerificationListModule { }
