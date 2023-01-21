import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFlaggedComponent } from './page-flagged/page-flagged.component';
import { PageInboxComponent } from './page-inbox/page-inbox.component';
import { PageSentComponent } from './page-sent/page-sent.component';
import { PageSpamComponent } from './page-spam/page-spam.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "inbox",
  },
  {
    path: 'flagged',
    component: PageFlaggedComponent,
  },
  {
    path: 'inbox',
    component: PageInboxComponent,
  },
  {
    path: 'sent',
    component: PageSentComponent,
  },
  {
    path: 'spam',
    component: PageSpamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
