import {  FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileRoutingModule } from "./profile-routing.module";
import { PageProfileAddComponent } from "./page-profile-add/page-profile-add.component";
import { PageProfileEditComponent } from "./page-profile-edit/page-profile-edit.component";
import { PageProfileViewComponent } from "./page-profile-view/page-profile-view.component";
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    PageProfileAddComponent,
    PageProfileEditComponent,
    PageProfileViewComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule,ReactiveFormsModule,FormsModule,TextMaskModule],
})
export class ProfileModule {}
