import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProfileAddComponent } from './page-profile-add/page-profile-add.component';
import { PageProfileEditComponent } from './page-profile-edit/page-profile-edit.component';
import { PageProfileViewComponent } from './page-profile-view/page-profile-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile-add',
    pathMatch: 'full',
  },
  {
    path: 'profile-add',
    component: PageProfileAddComponent,
  },
  {
    path: 'profile-edit',
    component: PageProfileEditComponent,
  },
  {
    path: 'profile-view',
    component: PageProfileViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
