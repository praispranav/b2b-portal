import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-routing.module';
import { FormCompanyDetailComponent } from './components/form-company-detail/form-company-detail.component';
import { FormCompanyProfileComponent } from './components/form-company-profile/form-company-profile.component';
import { PageCompanyAddComponent } from './page-company-add/page-company-add.component';
import { PageCompanyEditComponent } from './page-company-edit/page-company-edit.component';
import { PageCompanyViewComponent } from './page-company-view/page-company-view.component';


@NgModule({
  declarations: [
    FormCompanyDetailComponent,
    FormCompanyProfileComponent,
    PageCompanyAddComponent,
    PageCompanyEditComponent,
    PageCompanyViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
