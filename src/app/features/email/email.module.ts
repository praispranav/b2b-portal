import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmailRoutingModule } from "./email-routing.module";
import { PageInboxComponent } from "./page-inbox/page-inbox.component";
import { PageSentComponent } from "./page-sent/page-sent.component";
import { PageSpamComponent } from "./page-spam/page-spam.component";
import { PageComposeComponent } from "./page-compose/page-compose.component";

@NgModule({
  declarations: [
    PageInboxComponent,
    PageSentComponent,
    PageSpamComponent,
    PageComposeComponent,
  ],
  imports: [CommonModule, EmailRoutingModule],
})
export class EmailModule {}
