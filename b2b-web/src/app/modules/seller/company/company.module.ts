import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule, TabsModule.forRoot(), FormsModule, ReactiveFormsModule
  ]
})
export class CompanyModule { }
