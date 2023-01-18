import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandApprovalRequestRoutingModule } from './brand-approval-request-routing.module';
import { BrandApprovalListComponent } from './brand-approval-list/brand-approval-list.component';
import { SharedModule } from '../../../@pages/components/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BrandApprovalListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrandApprovalRequestRoutingModule,
    SharedModule,
    NgxDatatableModule,
    pgTabsModule,
  ]
})
export class BrandApprovalRequestModule { }
