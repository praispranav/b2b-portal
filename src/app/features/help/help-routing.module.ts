import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComplainAddComponent } from "./page-complain-add/page-complain-add.component";
import { PageComplainListComponent } from "./page-complain-list/page-complain-list.component";
import { PageDisputeAddComponent } from "./page-dispute-add/page-dispute-add.component";
import { PageDisputeListComponent } from "./page-dispute-list/page-dispute-list.component";
import { PageSuggestionAddComponent } from "./page-suggestion-add/page-suggestion-add.component";
import { PageSuggestionListComponent } from "./page-suggestion-list/page-suggestion-list.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "complain-list",
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
    path: "dispute-add",
    component: PageDisputeAddComponent
  },
  {
    path: "dispute-list",
    component: PageDisputeListComponent
  },
  {
    path: "suggestion-add",
    component: PageSuggestionAddComponent
  },
  {
    path: "suggestion-list",
    component: PageSuggestionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
