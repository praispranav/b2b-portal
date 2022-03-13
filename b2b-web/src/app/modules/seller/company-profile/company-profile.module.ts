import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { EditDetailsComponent } from './details/edit-details/edit-details.component';
import { AddDetailsComponent } from './details/add-details/add-details.component';



@NgModule({
  declarations: [
    AddProfileComponent,
    EditProfileComponent,
    EditDetailsComponent,
    AddDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompanyProfileModule { }
