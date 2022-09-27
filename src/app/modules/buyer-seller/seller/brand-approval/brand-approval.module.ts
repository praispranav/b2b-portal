import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrandApprovalRoutingModule } from "./brand-approval-routing.module";
import { PageBrandApprovalAddComponent } from "./page-brand-approval-add/page-brand-approval-add.component";
import { PageBrandApprovalListComponent } from "./page-brand-approval-list/page-brand-approval-list.component";
import { PageBrandApprovalViewComponent } from "./page-brand-approval-view/page-brand-approval-view.component";

@NgModule({
  declarations: [
    PageBrandApprovalAddComponent,
    PageBrandApprovalListComponent,
    PageBrandApprovalViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrandApprovalRoutingModule,
  ],
})
export class BrandApprovalModule {}
