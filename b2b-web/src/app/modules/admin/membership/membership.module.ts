import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { AddMembershipComponent } from './add-membership/add-membership.component';
import { ListMembershipComponent } from './list-membership/list-membership.component';
import { EditMembershipComponent } from './edit-membership/edit-membership.component';



@NgModule({
  declarations: [
    MembershipComponent,
    AddMembershipComponent,
    ListMembershipComponent,
    EditMembershipComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MembershipModule { }
