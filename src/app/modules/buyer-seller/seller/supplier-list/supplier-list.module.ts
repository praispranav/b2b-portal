import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierListRoutingModule } from './supplier-list-routing.module';
import { PageSupplierListComponent } from './page-supplier-list/page-supplier-list.component';


@NgModule({
  declarations: [PageSupplierListComponent],
  imports: [
    CommonModule,
    SupplierListRoutingModule
  ]
})
export class SupplierListModule { }
