import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLocationAddComponent } from './page-location-add/page-location-add.component';
import { PageLocationEditComponent } from './page-location-edit/page-location-edit.component';
import { PageLocationListComponent } from './page-location-list/page-location-list.component';
import { PageLocationViewComponent } from './page-location-view/page-location-view.component';

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
    path: 'location-edit',
    component: PageLocationEditComponent,
  },
  {
    path: 'location-list',
    component: PageLocationListComponent,
  },
  {
    path: 'location-view',
    component: PageLocationViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
