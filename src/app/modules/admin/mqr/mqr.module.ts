import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminMqrComponent } from './page-admin-mqr/page-admin-mqr.component';
import { MqrRoutingModule } from './mqr-routing.module';
import { SharedModule } from '../../../@pages/components/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';



@NgModule({
  declarations: [PageAdminMqrComponent],
  imports: [
    CommonModule,
    MqrRoutingModule,
    SharedModule,
    NgxDatatableModule,
    pgTabsModule,
  ]
})
export class MqrModule { }
