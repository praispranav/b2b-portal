import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AddMembershipComponent } from './add-membership/add-membership.component';
import { ListMembershipComponent } from './list-membership/list-membership.component';
import { MembershipRoutingModule } from "./membership-routing.module"
import { SharedModule } from 'src/app/shared/shared.module';
import { EditMembershipComponent } from './edit-membership/edit-membership.component';
@NgModule({
  declarations: [
    MembershipComponent,
    AddMembershipComponent,
    ListMembershipComponent,
    EditMembershipComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule, MembershipRoutingModule, SharedModule, FormsModule
  ]
})
export class MembershipModule { }
