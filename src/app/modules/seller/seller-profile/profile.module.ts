import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { ProfileRoutingModule } from "./profile-routing.module";
import { FormCompanyDetailComponent } from "./components/form-company-detail/form-company-detail.component";
import { FormCompanyProfileComponent } from "./components/form-company-profile/form-company-profile.component";
import { PageProfileAddComponent } from "./page-profile-add/page-profile-add.component";
import { PageProfileEditComponent } from "./page-profile-edit/page-profile-edit.component";
import { PageProfileViewComponent } from "./page-profile-view/page-profile-view.component";
import { FormQualityControlComponent } from './components/form-quality-control/form-quality-control.component';
import { RAndDFormComponent } from './components/r-and-d-form/r-and-d-form.component';

@NgModule({
  declarations: [
    FormCompanyDetailComponent,
    FormCompanyProfileComponent,
    PageProfileAddComponent,
    PageProfileEditComponent,
    PageProfileViewComponent,
    FormQualityControlComponent,
    RAndDFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
  ],
})
export class ProfileModule { }
