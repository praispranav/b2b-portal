import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { ListLocationComponent } from './list-location/list-location.component';
import { LocationRoutingModule } from "./location-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';
import { EditLocationComponent } from './edit-location/edit-location.component';
@NgModule({
  declarations: [
    LocationComponent,
    AddLocationComponent,
    ListLocationComponent,
    EditLocationComponent
  ],
  imports: [
    CommonModule, LocationRoutingModule,SharedModule
  ]
})
export class LocationModule { }
