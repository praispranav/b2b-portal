import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { RAndDCapacityComponent } from './r-and-d-capacity.component';

const routes: Routes = [
  {
    path: '',
    component: RAndDCapacityComponent,
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
            path: 'add-rnd',
            component: ManageComponent
        },
        {
            path: 'view-rnd',
            component: DetailComponent
        },
    ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RAndDCapacityRoutingModule { }
