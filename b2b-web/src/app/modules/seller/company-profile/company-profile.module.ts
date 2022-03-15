import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ManageComponent } from './manage/manage.component';
import { CompnayProfileComponent } from './compnay-profile.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ManageComponent,
    CompnayProfileComponent
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule
  ]
})
export class CompanyProfileModule { }
