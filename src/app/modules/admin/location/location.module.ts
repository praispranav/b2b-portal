import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';
import { PageLocationAddComponent } from './page-location-add/page-location-add.component';
import { PageLocationEditComponent } from './page-location-edit/page-location-edit.component';
import { PageLocationListComponent } from './page-location-list/page-location-list.component';

@NgModule({
  declarations: [
    PageLocationAddComponent,
    PageLocationEditComponent,
    PageLocationListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocationRoutingModule,
  ],
})
export class LocationModule {}
