import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCompanyAddComponent } from './page-company-add/page-company-add.component';
import { PageCompanyEditComponent } from './page-company-edit/page-company-edit.component';
import { PageCompanyViewComponent } from './page-company-view/page-company-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'company-view',
    pathMatch: 'full',
  },
  {
    path: 'company-add',
    component: PageCompanyAddComponent,
  },
  {
    path: 'company-edit',
    component: PageCompanyEditComponent,
  },
  {
    path: 'company-view',
    component: PageCompanyViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
