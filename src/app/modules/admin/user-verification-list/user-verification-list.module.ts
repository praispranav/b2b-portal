import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserVerificationListRoutingModule } from './user-verification-list-routing.module';
import { UserVerificationListComponent } from './user-verification-list/user-verification-list.component';
import { SharedModule } from '../../../@pages/components/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';
import { UserVerificationVewComponent } from './user-verification-vew/user-verification-vew.component';
import { BuyerViewComponent } from './buyer-view/buyer-view.component';
import { FormsModule } from '@angular/forms';
// import { ProductVerificationRoutingModule } from '../product-verification/product-verification-routing.module';


@NgModule({
  declarations: [UserVerificationListComponent, UserVerificationVewComponent, BuyerViewComponent],
  imports: [
    CommonModule,
    UserVerificationListRoutingModule,
    SharedModule,
    FormsModule,
    NgxDatatableModule,
    pgTabsModule,
    // ProductVerificationRoutingModule
  ]
})
export class UserVerificationListModule { }
