import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandApprovalRoutingModule } from "./brand-approval-routing.module";
import { PageBrandApprovalAddComponent } from "./page-brand-approval-add/page-brand-approval-add.component";
import { PageBrandApprovalListComponent } from "./page-brand-approval-list/page-brand-approval-list.component";
import { pgUploadModule } from '../../../../@pages/components/upload/upload.module';

@NgModule({
  declarations: [
    PageBrandApprovalAddComponent,
    PageBrandApprovalListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrandApprovalRoutingModule,
    pgUploadModule
  ],
})
export class BrandApprovalModule {}
