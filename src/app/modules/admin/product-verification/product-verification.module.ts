import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProductVerificationComponent } from './page-product-verification/page-product-verification.component';
import { SharedModule } from '../../../@pages/components/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';
import { ProductVerificationRoutingModule } from './product-verification-routing.module';



@NgModule({
  declarations: [PageProductVerificationComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxDatatableModule,
    pgTabsModule,
    ProductVerificationRoutingModule
  ]
})
export class ProductVerificationModule { }
