import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserVerificationListRoutingModule } from './user-verification-list-routing.module';
import { UserVerificationListComponent } from './user-verification-list/user-verification-list.component';
import { SharedModule } from '../../../@pages/components/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';
// import { ProductVerificationRoutingModule } from '../product-verification/product-verification-routing.module';


@NgModule({
  declarations: [UserVerificationListComponent],
  imports: [
    CommonModule,
    UserVerificationListRoutingModule,
    SharedModule,
    NgxDatatableModule,
    pgTabsModule,
    // ProductVerificationRoutingModule
  ]
})
export class UserVerificationListModule { }
