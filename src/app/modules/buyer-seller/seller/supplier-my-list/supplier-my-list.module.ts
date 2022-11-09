import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSupplierMyListingComponent } from './page-supplier-my-listing/page-supplier-my-listing.component';
import { SharedModule } from '../../../../@pages/components/shared.module';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [PageSupplierMyListingComponent],
  imports: [
    CommonModule,
    SharedModule,
    // NgxDatatableModule
  ]
})
export class SupplierMyListModule { }
