import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';

const routes: Routes = [
  {
    path: 'error-404',
    component: PageError404Component,
  },
  {
    path: 'error-500',
    component: PageError500Component,
  },
  {
    path: '**',
    component: PageError404Component,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
