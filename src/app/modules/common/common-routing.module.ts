import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  exports: [RouterModule],
})
export class CommonRoutingModule {}
