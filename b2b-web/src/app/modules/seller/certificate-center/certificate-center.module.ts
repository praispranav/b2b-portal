import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateCenterRoutingModule } from './certificate-center-routing.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { DetailComponent } from './detail/detail.component';
import { CertificateCenterComponent } from './certificate-center.component';


@NgModule({
  declarations: [
    ListComponent,
    ManageComponent,
    DetailComponent,
    CertificateCenterComponent
  ],
  imports: [
    CommonModule,
    CertificateCenterRoutingModule
  ]
})
export class CertificateCenterModule { }
