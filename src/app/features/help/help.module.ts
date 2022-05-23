import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HelpRoutingModule } from "./help-routing.module";
import { PageComplainAddComponent } from "./page-complain-add/page-complain-add.component";
import { PageComplainListComponent } from "./page-complain-list/page-complain-list.component";
import { PageComplainViewComponent } from "./page-complain-view/page-complain-view.component";
import { PageDisputeAddComponent } from "./page-dispute-add/page-dispute-add.component";
import { PageDisputeListComponent } from "./page-dispute-list/page-dispute-list.component";
import { PageDisputeViewComponent } from "./page-dispute-view/page-dispute-view.component";
import { PageSuggestionAddComponent } from "./page-suggestion-add/page-suggestion-add.component";
import { PageSuggestionListComponent } from "./page-suggestion-list/page-suggestion-list.component";
import { PageSuggestionViewComponent } from "./page-suggestion-view/page-suggestion-view.component";

@NgModule({
  declarations: [
    PageComplainAddComponent,
    PageComplainListComponent,
    PageComplainViewComponent,
    PageDisputeAddComponent,
    PageDisputeListComponent,
    PageDisputeViewComponent,
    PageSuggestionAddComponent,
    PageSuggestionListComponent,
    PageSuggestionViewComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HelpRoutingModule],
})
export class HelpModule {}
