import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCategoryAddComponent } from './page-category-add/page-category-add.component';
import { PageCategoryEditComponent } from './page-category-edit/page-category-edit.component';
import { PageCategoryListComponent } from './page-category-list/page-category-list.component';
import { PageCategoryViewComponent } from './page-category-view/page-category-view.component';

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
    path: 'category-edit',
    component: PageCategoryEditComponent,
  },
  {
    path: 'category-list',
    component: PageCategoryListComponent,
  },
  {
    path: 'category-view',
    component: PageCategoryViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
