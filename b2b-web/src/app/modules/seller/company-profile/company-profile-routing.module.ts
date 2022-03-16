import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompnayProfileComponent } from './compnay-profile.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';

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
        path: 'add-detail',
        component: ManageComponent,
      },
      {
        path: 'view-detail',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyProfileRoutingModule {}
