import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserAuthRoutingModule } from "./user-auth-routing.module";
import { PageForgotPasswordComponent } from "./page-forgot-password/page-forgot-password.component";
import { PageResetPasswordComponent } from "./page-reset-password/page-reset-password.component";
import { PageSignInComponent } from "./page-sign-in/page-sign-in.component";
import { PageSignUpComponent } from "./page-sign-up/page-sign-up.component";

@NgModule({
  declarations: [
    PageForgotPasswordComponent,
    PageResetPasswordComponent,
    PageSignInComponent,
    PageSignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserAuthRoutingModule,
  ],
})
export class UserAuthModule {}
