import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { PageChatBoxComponent } from './page-chat-box/page-chat-box.component';


@NgModule({
  declarations: [PageChatBoxComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
