import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryComponent } from './category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

const routes: Routes = [
    {
        path: '',
        component: CategoryComponent,
        children: [
            {
                path: '',
                redirectTo: 'category-list',
                pathMatch: 'full'
            },
            {
                path: 'category-list',
                component: ListCategoryComponent
            },
            {
                path: 'add-category',
                component: AddCategoryComponent
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }