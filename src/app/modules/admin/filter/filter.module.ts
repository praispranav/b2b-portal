import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterRoutingModule } from './filter-routing.module';
import { TreeModule } from 'angular-tree-component';
import { pgSelectModule } from '../../../@pages/components/select/select.module';
import { pgTagModule } from '../../../@pages/components/tag/tag.module';
import { pgUploadModule } from '../../../@pages/components/upload/upload.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../@pages/components/shared.module';
import { ProgressModule } from '../../../@pages/components/progress/progress.module';
import { MessageService } from '../../../@pages/components/message/message.service';
import { MessageModule } from '../../../@pages/components/message/message.module';
import { PageFilterAddComponent } from './page-filter-add/page-filter-add.component';
import { PageFilterEditComponent } from './page-filter-edit/page-filter-edit.component';
import { PageFilterListComponent } from './page-filter-list/page-filter-list.component';
import { PageFilterViewComponent } from './page-filter-view/page-filter-view.component';

@NgModule({
  declarations: [
    PageFilterAddComponent, 
    PageFilterEditComponent, 
    PageFilterListComponent, 
    PageFilterViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FilterRoutingModule,
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
export class FilterModule { }
