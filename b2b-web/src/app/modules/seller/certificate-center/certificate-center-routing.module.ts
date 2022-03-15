import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateCenterComponent } from './certificate-center.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateCenterComponent,
    children: [
        {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
        },
        {
            path: 'list',
            component: ListComponent
        },
        {
            path: 'manage',
            component: ManageComponent
        },
        {
            path: 'detail',
            component: DetailComponent
        },

    ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateCenterRoutingModule { }
