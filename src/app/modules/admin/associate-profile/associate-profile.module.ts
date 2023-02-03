import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociateProfileRoutingModule } from './associate-profile-routing.module';
import { AssociateProfileAddComponent } from './associate-profile-add/associate-profile-add.component';
import { AssociateProfileViewComponent } from './associate-profile-view/associate-profile-view.component';
import { AssociateProfileListComponent } from './associate-profile-list/associate-profile-list.component';


@NgModule({
  declarations: [AssociateProfileAddComponent, AssociateProfileViewComponent, AssociateProfileListComponent],
  imports: [
    CommonModule,
    AssociateProfileRoutingModule
  ]
})
export class AssociateProfileModule { }
