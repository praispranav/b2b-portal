import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierListRoutingModule } from './supplier-list-routing.module';
import { PageSupplierListComponent } from './page-supplier-list/page-supplier-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../@pages/components/shared.module';
import { pgTabsModule } from '../../../../@pages/components/tabs/tabs.module';


@NgModule({
  declarations: [PageSupplierListComponent],
  imports: [
    CommonModule,
    SupplierListRoutingModule,
    NgxDatatableModule,
    SharedModule,
    pgTabsModule
  ]
})
export class SupplierListModule { }
