import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PageProfileAddComponent } from './page-profile-add/page-profile-add.component';
import { PageProfileEditComponent } from './page-profile-edit/page-profile-edit.component';
import { PageProfileViewComponent } from './page-profile-view/page-profile-view.component';


@NgModule({
  declarations: [PageProfileAddComponent, PageProfileEditComponent, PageProfileViewComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
