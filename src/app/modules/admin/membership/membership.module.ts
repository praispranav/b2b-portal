import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembershipRoutingModule } from './membership-routing.module';
import { PageMembershipAddComponent } from './page-membership-add/page-membership-add.component';
import { PageMembershipEditComponent } from './page-membership-edit/page-membership-edit.component';
import { PageMembershipListComponent } from './page-membership-list/page-membership-list.component';

@NgModule({
  declarations: [
    PageMembershipAddComponent,
    PageMembershipEditComponent,
    PageMembershipListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MembershipRoutingModule,
  ],
})
export class MembershipModule {}
