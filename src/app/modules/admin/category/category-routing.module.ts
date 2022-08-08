import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCategoryAddComponent } from './page-category-add/page-category-add.component';
import { PageCategoryEditComponent } from './page-category-edit/page-category-edit.component';
import { PageCategoryListComponent } from './page-category-list/page-category-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'category-list',
    pathMatch: 'full',
  },
  {
    path: 'category-add',
    component: PageCategoryAddComponent,
  },
  {
    path: 'category-add/:parentId',
    component: PageCategoryAddComponent,
  },
  {
    path: 'category-edit/:category',
    component: PageCategoryEditComponent,
  },
  {
    path: 'category-edit/:category/:parentId',
    component: PageCategoryEditComponent,
  },
  {
    path: 'category-list',
    component: PageCategoryListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule { }
