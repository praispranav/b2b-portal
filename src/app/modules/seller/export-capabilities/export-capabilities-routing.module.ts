import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { ExportCapabilitiesComponent } from './export-capabilities.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path: '',
    component: ExportCapabilitiesComponent,
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
        component: DetailsComponent
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportCapabilitiesRoutingModule { }
