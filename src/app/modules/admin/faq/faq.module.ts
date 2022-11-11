import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFaqAddComponent } from './page-faq-add/page-faq-add.component';
import { FaqRoutingModule } from './faq-routing.module';
import { SharedModule } from '../../../@pages/components/shared.module';
import { pgSelectModule } from '../../../@pages/components/select/select.module';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageFaqAddComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    pgSelectModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FaqModule { }
