import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFilterAddComponent } from './page-filter-add/page-filter-add.component';
import { PageFilterEditComponent } from './page-filter-edit/page-filter-edit.component';
import { PageFilterListComponent } from './page-filter-list/page-filter-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filter-list',
    pathMatch: 'full',
  },
  {
    path: 'filter-add',
    component: PageFilterAddComponent,
  },
  {
    path: 'filter-edit/:filter',
    component: PageFilterEditComponent,
  },
  {
    path: 'filter-list',
    component: PageFilterListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterRoutingModule { }
