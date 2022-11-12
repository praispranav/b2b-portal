import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBuyingInterestComponent } from './page-buying-interest/page-buying-interest.component';
import { pgTabsModule } from '../../../../@pages/components/tabs/tabs.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../@pages/components/shared.module';
import { BuyingInterestRoutingModule } from './buying-interest-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageBuyingInterestComponent],
  imports: [
    CommonModule,
    BuyingInterestRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    SharedModule,
    pgTabsModule
  ]
})
export class BuyingInterestModule { }
