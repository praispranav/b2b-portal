import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompnayProfileComponent } from './compnay-profile.component';
import { ProfileViewComponent } from './detail/profile-view.component';

import { ListComponent } from './list/list.component';
import { AddProfileComponent } from './manage/add-profile.component';


const routes: Routes = [
  {
    path: '',
    component: CompnayProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add-profile',
        component: AddProfileComponent,
      },
      {
        path: 'view-profile',
        component: ProfileViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyProfileRoutingModule {}
