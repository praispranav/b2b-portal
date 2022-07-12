import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { pgSelectModule } from '../../../@pages/components/select/select.module';
import { pgTagModule } from '../../../@pages/components/tag/tag.module';
import { pgUploadModule } from '../../../@pages/components/upload/upload.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../@pages/components/shared.module';
import { ProgressModule } from '../../../@pages/components/progress/progress.module';
import { TreeModule } from 'angular-tree-component';

import { PageCategoryAddComponent } from './page-category-add/page-category-add.component';
import { PageCategoryListComponent } from './page-category-list/page-category-list.component';
import { MessageService } from '../../../@pages/components/message/message.service';
import { MessageModule } from '../../../@pages/components/message/message.module';

@NgModule({
  declarations: [
    PageCategoryAddComponent,
    PageCategoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
    pgSelectModule,
    pgTagModule,
    pgUploadModule,
    NgxDatatableModule,
    SharedModule,
    ProgressModule,
    MessageModule,
    TreeModule.forRoot()
  ],
  providers: [MessageService]

})
export class CategoryModule { }
