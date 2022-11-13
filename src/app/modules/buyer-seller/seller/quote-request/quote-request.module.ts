import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteRequestRoutingModule } from './quote-request-routing.module';
import { PageQuoteRequestAddComponent } from './page-quote-request-add/page-quote-request-add.component';
import { PageQuoteRequestListComponent } from './page-quote-request-list/page-quote-request-list.component';
import { PageQuoteRequestViewComponent } from './page-quote-request-view/page-quote-request-view.component';


@NgModule({
  declarations: [PageQuoteRequestAddComponent, PageQuoteRequestListComponent, PageQuoteRequestViewComponent],
  imports: [
    CommonModule,
    QuoteRequestRoutingModule
  ]
})
export class QuoteRequestModule { }
