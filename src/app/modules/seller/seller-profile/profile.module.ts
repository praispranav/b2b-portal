import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { ProfileRoutingModule } from "./profile-routing.module";
import { CertificateCenterComponent } from './components/certificate-center/certificate-center.component';
import { FormCompanyDetailComponent } from "./components/form-company-detail/form-company-detail.component";
import { FormCompanyProfileComponent } from "./components/form-company-profile/form-company-profile.component";
import { FormQualityControlComponent } from './components/form-quality-control/form-quality-control.component';
import { FormRAndDComponent } from './components/form-r-and-d/form-r-and-d.component';
import { PageProfileAddComponent } from "./page-profile-add/page-profile-add.component";
import { PageProfileEditComponent } from "./page-profile-edit/page-profile-edit.component";
import { PageProfileViewComponent } from "./page-profile-view/page-profile-view.component";

@NgModule({
  declarations: [
    CertificateCenterComponent,
    FormCompanyDetailComponent,
    FormCompanyProfileComponent,
    FormQualityControlComponent,
    FormRAndDComponent,
    PageProfileAddComponent,
    PageProfileEditComponent,
    PageProfileViewComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
  ],
})
export class ProfileModule { }
