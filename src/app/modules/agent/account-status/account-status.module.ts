import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountStatusRoutingModule } from './account-status-routing.module';
// import { AccountStatusLinkComponent } from './account-status-link/account-status-link.component';
import { AccountStatusListComponent } from './account-status-list/account-status-list.component';


@NgModule({
  declarations: [ AccountStatusListComponent],
  imports: [
    CommonModule,
    AccountStatusRoutingModule
  ]
})
export class AccountStatusModule { }
