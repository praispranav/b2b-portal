import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';
import { PageSignInComponent } from './page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './page-sign-up/page-sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'error-404',
    component: PageError404Component
  },
  {
    path: 'error-500',
    component: PageError500Component
  },
  {
    path: 'sign-in',
    component: PageSignInComponent
  },
  {
    path: 'sign-up',
    component: PageSignUpComponent
  },
  {
    path: '**',
    component: PageError404Component
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
