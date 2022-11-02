import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandApprovalRoutingModule } from "./brand-approval-routing.module";
import { PageBrandApprovalAddComponent } from "./page-brand-approval-add/page-brand-approval-add.component";
import { PageBrandApprovalListComponent } from "./page-brand-approval-list/page-brand-approval-list.component";
import { pgUploadModule } from '../../../../@pages/components/upload/upload.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from "../../../../@pages/components/shared.module";

@NgModule({
  declarations: [
    PageBrandApprovalAddComponent,
    PageBrandApprovalListComponent,
    // ContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrandApprovalRoutingModule,
    pgUploadModule,
    NgxDatatableModule,
    SharedModule
  ],

})
export class BrandApprovalModule { }
