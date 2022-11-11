import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNoticeBarAddComponent } from './page-notice-bar-add/page-notice-bar-add.component';
import { NoticeBarRoutingModule } from './notice-bar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { pgSelectModule } from '../../../@pages/components/select/select.module';



@NgModule({
  declarations: [PageNoticeBarAddComponent],
  imports: [
    CommonModule,
    NoticeBarRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    pgSelectModule
  ]
})
export class NoticeBarModule { }
