import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminMqrComponent } from './page-admin-mqr/page-admin-mqr.component';
import { MqrRoutingModule } from './mqr-routing.module';
import { SharedModule } from '../../../@pages/components/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageAdminMqrComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MqrRoutingModule,
    SharedModule,
    NgxDatatableModule,
    pgTabsModule,
  ]
})
export class MqrModule { }
