import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';



@NgModule({
  declarations: [
    CategoryComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
