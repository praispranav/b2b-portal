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
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: ListCategoryComponent
            },
            {
                path: 'manage',
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