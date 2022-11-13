import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBlogRoutingModule } from './admin-blog-routing.module';
import { PageAddBlogComponent } from './page-add-blog/page-add-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { pgSelectfx } from '../../../@pages/components/cs-select/select.module';
import { pgTagModule } from '../../../@pages/components/tag/tag.module';
import { pgUploadModule } from '../../../@pages/components/upload/upload.module'; 
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { pgDatePickerModule } from '../../../@pages/components/datepicker/datepicker.module';
import { pgTabsModule } from '../../../@pages/components/tabs/tabs.module';
import { pgSelectModule } from '../../../@pages/components/select/select.module';
@NgModule({
  declarations: [PageAddBlogComponent],
  imports: [
    CommonModule,
    AdminBlogRoutingModule,
    ReactiveFormsModule,
    QuillModule,
    pgSelectfx,
    pgTagModule,
    pgUploadModule,
   
    FormsModule,
    ReactiveFormsModule,

    pgSelectModule,
    pgTagModule,
  
    pgTabsModule,
    pgSelectfx,
    pgDatePickerModule,
    pgUploadModule,
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  
    pgSelectModule,
    pgTagModule,
  
    pgTabsModule,
    pgSelectfx,
    pgDatePickerModule,
    pgUploadModule,
    NgxDatatableModule,

    QuillModule.forRoot() 
  ]
})
export class AdminBlogModule { }
