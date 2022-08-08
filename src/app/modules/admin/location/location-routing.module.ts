import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLocationAddComponent } from './page-location-add/page-location-add.component';
import { PageLocationEditComponent } from './page-location-edit/page-location-edit.component';
import { PageLocationListComponent } from './page-location-list/page-location-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'location-list',
    pathMatch: 'full',
  },
  {
    path: 'location-add',
    component: PageLocationAddComponent,
  },
  {
    path: 'location-edit/:country',
    component: PageLocationEditComponent,
  },
  {
    path: 'location-edit/:country/:state',
    component: PageLocationEditComponent,
  },
  {
    path: 'location-edit/:country/:state/:location',
    component: PageLocationEditComponent,
  },
  {
    path: 'location-list',
    component: PageLocationListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
