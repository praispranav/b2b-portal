import {  FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileRoutingModule } from "./profile-routing.module";
import { PageProfileAddComponent } from "./page-profile-add/page-profile-add.component";
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    PageProfileAddComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule
  ],
})
export class ProfileModule {}
