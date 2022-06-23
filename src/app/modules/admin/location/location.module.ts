import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LocationRoutingModule } from './location-routing.module';
import { pgSelectModule } from '../../../@pages/components/select/select.module';
import { pgTagModule } from '../../../@pages/components/tag/tag.module';
import { pgUploadModule } from '../../../@pages/components/upload/upload.module';
import { ProgressModule } from '../../../@pages/components/progress/progress.module';
import { SharedModule } from '../../../@pages/components/shared.module';

import { PageLocationAddComponent } from './page-location-add/page-location-add.component';
import { PageLocationEditComponent } from './page-location-edit/page-location-edit.component';
import { PageLocationListComponent } from './page-location-list/page-location-list.component';
import { PageLocationViewComponent } from './page-location-view/page-location-view.component';

@NgModule({
  declarations: [
    PageLocationAddComponent,
    PageLocationEditComponent,
    PageLocationListComponent,
    PageLocationViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocationRoutingModule,
    pgSelectModule,
    pgTagModule,
    pgUploadModule,
    NgxDatatableModule,
    TreeModule.forRoot(),
    ProgressModule,
    SharedModule
  ],
})
export class LocationModule { }
