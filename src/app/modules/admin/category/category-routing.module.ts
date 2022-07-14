import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCategoryAddComponent } from './page-category-add/page-category-add.component';
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
    path: 'category-list',
    component: PageCategoryListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
