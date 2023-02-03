import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignAccountRoutingModule } from './assign-account-routing.module';
import { AssignAccountListComponent } from './assign-account-list/assign-account-list.component';


@NgModule({
  declarations: [AssignAccountListComponent],
  imports: [
    CommonModule,
    AssignAccountRoutingModule
  ]
})
export class AssignAccountModule { }
