import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageForgotPasswordComponent } from "./page-forgot-password/page-forgot-password.component";
import { PageResetPasswordComponent } from "./page-reset-password/page-reset-password.component";
import { PageSignInComponent } from "./page-sign-in/page-sign-in.component";
import { PageSignUpComponent } from "./page-sign-up/page-sign-up.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full",
  },
  {
    path: "forgot-password",
    component: PageForgotPasswordComponent,
  },
  {
    path: "reset-password",
    component: PageResetPasswordComponent,
  },
  {
    path: "sign-in",
    component: PageSignInComponent,
  },
  {
    path: "sign-up-verify",
    component: PageSignInComponent,
  },
  {
    path: "sign-up",
    component: PageSignUpComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAuthRoutingModule { }
