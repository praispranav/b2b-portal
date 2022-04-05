import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { PageSignInComponent } from './page-sign-in/page-sign-in.component';

@NgModule({
  declarations: [PageSignInComponent],
  imports: [CommonModule, AdminAuthRoutingModule],
})
export class AdminAuthModule {}
