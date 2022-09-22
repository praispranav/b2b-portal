import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { PageCategoryAddComponent } from './page-category-add/page-category-add.component';
import { PageCategoryEditComponent } from './page-category-edit/page-category-edit.component';
import { PageCategoryListComponent } from './page-category-list/page-category-list.component';
import { PageCategoryViewComponent } from './page-category-view/page-category-view.component';

@NgModule({
  declarations: [
    PageCategoryAddComponent,
    PageCategoryEditComponent,
    PageCategoryListComponent,
    PageCategoryViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
  ],
})
export class CategoryModule {}
