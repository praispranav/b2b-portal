import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { ListComponent } from './list/list.component';

import { CompnayProfileComponent } from './compnay-profile.component';
import { ProfileViewComponent } from './detail/profile-view.component';
import { AddProfileComponent } from './manage/add-profile.component';


@NgModule({
  declarations: [
    ListComponent,
    ProfileViewComponent,
    AddProfileComponent,
    CompnayProfileComponent
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule
  ]
})
export class CompanyProfileModule { }
