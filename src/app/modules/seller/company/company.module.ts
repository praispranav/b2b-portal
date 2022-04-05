import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-routing.module';
import { PageCompanyAddComponent } from './page-company-add/page-company-add.component';
import { PageCompanyEditComponent } from './page-company-edit/page-company-edit.component';
import { PageCompanyViewComponent } from './page-company-view/page-company-view.component';


@NgModule({
  declarations: [
    PageCompanyAddComponent,
    PageCompanyEditComponent,
    PageCompanyViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
