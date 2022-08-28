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
    path: 'location-add/:type',
    component: PageLocationAddComponent,
  },
  {
    path: 'location-add/:type/:countryId',
    component: PageLocationAddComponent,
  },
  {
    path: 'location-add/:type/:countryId/:stateId',
    component: PageLocationAddComponent,
  },
  {
    path: 'location-edit/:type/:countryId',
    component: PageLocationEditComponent,
  },
  {
    path: 'location-edit/:type/:countryId/:stateId',
    component: PageLocationEditComponent,
  },
  {
    path: 'location-edit/:type/:countryId/:stateId/:locationId',
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
