import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileRoutingModule } from "./profile-routing.module";
import { pgTabsModule } from "../../../@pages/components/tabs/tabs.module";
import { pgSelectModule } from '../../../@pages/components/select/select.module';
import { pgTagModule } from "../../../@pages/components/tag/tag.module";
import { pgDatePickerModule } from "../../../@pages/components/datepicker/datepicker.module";
import { pgUploadModule } from "../../../@pages/components/upload/upload.module";

import { FormCompanyProfileComponent } from "./components/form-company-profile/form-company-profile.component";
import { FormSellerTypeComponent } from './components/form-seller-type/form-seller-type.component';
import { PageProfileAddComponent } from "./page-profile-add/page-profile-add.component";

@NgModule({
  declarations: [
    FormCompanyProfileComponent,
    FormSellerTypeComponent,
    PageProfileAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    pgTabsModule,
    pgSelectModule,
    pgTagModule,
    pgDatePickerModule,
    pgUploadModule
  ],
})
export class ProfileModule { }


// import { FormCertificateCenterComponent } from "./components/form-certificate-center/form-certificate-center.component";
// import { FormCompanyDetailComponent } from "./components/form-company-detail/form-company-detail.component";
// import { FormExportCapabilityComponent } from "./components/form-export-capability/form-export-capability.component";
// import { FormQualityControlComponent } from "./components/form-quality-control/form-quality-control.component";
// import { FormResearchAndDevelopmentComponent } from "./components/form-research-and-development/form-research-and-development.component";
