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
import { PageFilterAddComponent } from './page-filter-add/page-filter-add.component';
import { PageFilterEditComponent } from './page-filter-edit/page-filter-edit.component';
import { PageFilterListComponent } from './page-filter-list/page-filter-list.component';

@NgModule({
  declarations: [
    PageFilterAddComponent, 
    PageFilterEditComponent, 
    PageFilterListComponent
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
    TreeModule.forRoot()
  ],


})
export class FilterModule { }
