import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageQuoteRequestAddComponent } from './page-quote-request-add/page-quote-request-add.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "quote-request-add"
  },
  {
    path: "quote-request-add",
    component: PageQuoteRequestAddComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRequestRoutingModule { }
