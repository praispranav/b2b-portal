import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignAccountRoutingModule } from './assign-account-routing.module';
import { AssignAccountListComponent } from './assign-account-list/assign-account-list.component';
import { AssignAccountDetailsComponent } from './assign-account-details/assign-account-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AssignAccountListComponent,
    AssignAccountDetailsComponent
  ],
  imports: [
    CommonModule,
    AssignAccountRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AssignAccountModule { }
