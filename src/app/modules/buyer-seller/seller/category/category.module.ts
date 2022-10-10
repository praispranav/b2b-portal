import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { pgSelectModule } from '../../../../@pages/components/select/select.module';
import { pgTagModule } from '../../../../@pages/components/tag/tag.module';
import { pgUploadModule } from '../../../../@pages/components/upload/upload.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../../../@pages/components/shared.module';
import { ProgressModule } from '../../../../@pages/components/progress/progress.module';
import { TreeModule } from 'angular-tree-component';
import { PageCategoryAddComponent } from './page-category-add/page-category-add.component';
import { PageCategoryEditComponent } from './page-category-edit/page-category-edit.component';
import { PageCategoryListComponent } from './page-category-list/page-category-list.component';

@NgModule({
  declarations: [
    PageCategoryAddComponent,
    PageCategoryEditComponent,
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
    TreeModule.forRoot()
  ],
})
export class CategoryModule { }
