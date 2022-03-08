import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    CategoryComponent,
    AddCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule, CategoryRoutingModule, SharedModule
  ]
})
export class CategoryModule { }
