import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonRoutingModule } from './common-routing.module';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';

@NgModule({
  declarations: [PageError404Component, PageError500Component],
  imports: [CommonModule, CommonRoutingModule],
})
export class CommonModule {}
