import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierCatalogueRequestRoutingModule } from './supplier-catalogue-request-routing.module';
import { RequestForVerificationComponent } from './request-for-verification/request-for-verification.component';
import { RequestedSupplierComponent } from './requested-supplier/requested-supplier.component';
import { CatalogingDoneComponent } from './cataloging-done/cataloging-done.component';


@NgModule({
  declarations: [RequestForVerificationComponent, RequestedSupplierComponent, CatalogingDoneComponent],
  imports: [
    CommonModule,
    SupplierCatalogueRequestRoutingModule
  ]
})
export class SupplierCatalogueRequestModule { }
