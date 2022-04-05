import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerAuthRoutingModule } from './seller-auth-routing.module';
import { PageSignInComponent } from './page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './page-sign-up/page-sign-up.component';

@NgModule({
  declarations: [PageSignInComponent, PageSignUpComponent],
  imports: [CommonModule, SellerAuthRoutingModule],
})
export class SellerAuthModule {}
