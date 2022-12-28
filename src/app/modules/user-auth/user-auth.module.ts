import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserAuthRoutingModule } from "./user-auth-routing.module";
import { PageForgotPasswordComponent } from "./page-forgot-password/page-forgot-password.component";
import { PageResetPasswordComponent } from "./page-reset-password/page-reset-password.component";
import { PageSignInComponent } from "./page-sign-in/page-sign-in.component";
import { PageSignUpComponent } from "./page-sign-up/page-sign-up.component";
import { pgSelectModule } from "../../@pages/components/select/select.module";
import { pgSelectfx } from "../../@pages/components/cs-select/select.module";
import { TooltipModule } from "ngx-bootstrap";



@NgModule({
  declarations: [
    PageForgotPasswordComponent,
    PageResetPasswordComponent,
    PageSignInComponent,
    PageSignUpComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    UserAuthRoutingModule,
    pgSelectModule,
    pgSelectfx,
    
  ],
})
export class UserAuthModule {}
