import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociateProfileRoutingModule } from './associate-profile-routing.module';
import { AssociateProfileAddComponent } from './associate-profile-add/associate-profile-add.component';


@NgModule({
  declarations: [AssociateProfileAddComponent],
  imports: [
    CommonModule,
    AssociateProfileRoutingModule
  ]
})
export class AssociateProfileModule { }
