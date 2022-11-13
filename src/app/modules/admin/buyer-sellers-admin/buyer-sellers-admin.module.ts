import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBuyerSellersAdminComponent } from './page-buyer-sellers-admin/page-buyer-sellers-admin.component';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';
import { SharedModule } from '../../../@pages/components/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BuyerSellersAdminRoutingModule } from './buyer-sellers-admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageBuyerSellersAdminComponent],
  imports: [
    CommonModule,
    BuyerSellersAdminRoutingModule,
    NgxDatatableModule,
    SharedModule,
    pgTabsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BuyerSellersAdminModule { }
