import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTradeshowRoutingModule } from './admin-tradeshow-routing.module';
import { PageAddTradeShowComponent } from './page-add-trade-show/page-add-trade-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { pgSelectfx } from '../../../@pages/components/cs-select/select.module';
import { pgTagModule } from '../../../@pages/components/tag/tag.module';
import { pgUploadModule } from '../../../@pages/components/upload/upload.module'; 
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { pgDatePickerModule } from '../../../@pages/components/datepicker/datepicker.module';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';
import { pgSelectModule } from '../../../@pages/components/select/select.module';
import { TextMaskModule } from "angular2-text-mask";

@NgModule({
  declarations: [PageAddTradeShowComponent],
  imports: [
    CommonModule,
    AdminTradeshowRoutingModule,
    ReactiveFormsModule,
    QuillModule,
    pgSelectfx,
    pgTagModule,
    pgUploadModule,   
    FormsModule, 
    pgSelectModule,
    pgTagModule,  
    pgTabsModule,
    pgDatePickerModule,
    pgUploadModule,
    NgxDatatableModule, 
    QuillModule.forRoot() ,TextMaskModule
  ]
})
export class AdminTradeshowModule { }
