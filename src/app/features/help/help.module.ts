import { NgModule } from "@angular/core";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HelpRoutingModule } from "./help-routing.module";
import { PageComplainAddComponent } from "./page-complain-add/page-complain-add.component";
import { PageComplainListComponent } from "./page-complain-list/page-complain-list.component";
import { PageDisputeAddComponent } from "./page-dispute-add/page-dispute-add.component";
import { PageDisputeListComponent } from "./page-dispute-list/page-dispute-list.component";
import { PageSuggestionAddComponent } from "./page-suggestion-add/page-suggestion-add.component";
import { PageSuggestionListComponent } from "./page-suggestion-list/page-suggestion-list.component";

@NgModule({
  declarations: [
    PageComplainAddComponent,
    PageComplainListComponent,
    PageDisputeAddComponent,
    PageDisputeListComponent,
    PageSuggestionAddComponent,
    PageSuggestionListComponent,
    
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HelpRoutingModule,NgxDatatableModule],
})
export class HelpModule {}
