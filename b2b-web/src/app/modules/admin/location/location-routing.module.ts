import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLocationComponent } from './add-location/add-location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { ListLocationComponent } from './list-location/list-location.component';
import { LocationComponent } from './location.component';

const routes: Routes = [
    {
        path: '',
        component: LocationComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: ListLocationComponent
            },
            {
                path: 'manage',
                component: AddLocationComponent
            },
            {
                path: 'edit',
                component: EditLocationComponent
            }
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
