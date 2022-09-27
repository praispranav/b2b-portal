import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProfileAddComponent } from './page-profile-add/page-profile-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile-add',
    pathMatch: 'full',
  },
  {
    path: 'profile-add',
    component: PageProfileAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
