import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFaqAddComponent } from './page-faq-add/page-faq-add.component';
import { FaqRoutingModule } from './faq-routing.module';



@NgModule({
  declarations: [PageFaqAddComponent],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
