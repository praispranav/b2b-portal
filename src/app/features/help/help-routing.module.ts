import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComplainAddComponent } from "./page-complain-add/page-complain-add.component";
import { PageComplainListComponent } from "./page-complain-list/page-complain-list.component";
import { PageComplainViewComponent } from "./page-complain-view/page-complain-view.component";
import { PageDisputeAddComponent } from "./page-dispute-add/page-dispute-add.component";
import { PageDisputeListComponent } from "./page-dispute-list/page-dispute-list.component";
import { PageDisputeViewComponent } from "./page-dispute-view/page-dispute-view.component";
import { PageSuggestionAddComponent } from "./page-suggestion-add/page-suggestion-add.component";
import { PageSuggestionListComponent } from "./page-suggestion-list/page-suggestion-list.component";
import { PageSuggestionViewComponent } from "./page-suggestion-view/page-suggestion-view.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "complain-add",
  },
  {
    path: "complain-add",
    component: PageComplainAddComponent
  },
  {
    path: "complain-list",
    component: PageComplainListComponent
  },
  {
    path: "complain-view",
    component: PageComplainViewComponent
  },
  {
    path: "dispute-add",
    component: PageDisputeAddComponent
  },
  {
    path: "dispute-list",
    component: PageDisputeListComponent
  },
  {
    path: "dispute-view",
    component: PageDisputeViewComponent
  },
  {
    path: "suggestion-add",
    component: PageSuggestionAddComponent
  },
  {
    path: "suggestion-list",
    component: PageSuggestionListComponent
  },
  {
    path: "suggestion-view",
    component: PageSuggestionViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
