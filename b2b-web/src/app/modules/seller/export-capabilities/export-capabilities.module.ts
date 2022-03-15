import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportCapabilitiesRoutingModule } from './export-capabilities-routing.module';
import { ExportCapabilitiesComponent } from './export-capabilities.component';
import { ManageComponent } from './manage/manage.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ExportCapabilitiesComponent,
    ManageComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ExportCapabilitiesRoutingModule
  ]
})
export class ExportCapabilitiesModule { }
