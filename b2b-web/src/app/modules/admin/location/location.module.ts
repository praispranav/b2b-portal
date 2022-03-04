import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { ListLocationComponent } from './list-location/list-location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';



@NgModule({
  declarations: [
    LocationComponent,
    AddLocationComponent,
    ListLocationComponent,
    EditLocationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LocationModule { }
