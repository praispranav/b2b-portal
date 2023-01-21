import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailRoutingModule } from './email-routing.module';
import { PageInboxComponent } from './page-inbox/page-inbox.component';
import { PageSentComponent } from './page-sent/page-sent.component';
import { PageSpamComponent } from './page-spam/page-spam.component';
import { PageFlaggedComponent } from './page-flagged/page-flagged.component';
import { QuillModule } from 'ngx-quill';
import { BsDropdownModule } from 'ngx-bootstrap';
import { EmailServiceLight } from './email.service';
import { SharedModule } from '../../../../@pages/components/shared.module';
import { pgTagModule } from '../../../../@pages/components/tag/tag.module';

@NgModule({
  declarations: [
    PageInboxComponent,
    PageSentComponent,
    PageSpamComponent,
    PageFlaggedComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    QuillModule.forRoot(),
    pgTagModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    EmailRoutingModule,
  ],
  providers: [EmailServiceLight]
})
export class EmailBuyerModule { }
