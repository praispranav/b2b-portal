import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProviderUserAuthService } from "../../../core/providers/auth/provider-user-auth.service";
import { AppMessageService } from "../../../core/services/app-message.service";

@Component({
  selector: "app-page-forgot-password",
  templateUrl: "./page-forgot-password.component.html",
  styleUrls: ["./page-forgot-password.component.scss"],
})
export class PageForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerUserAuthService: ProviderUserAuthService
  ) { }

  get f() {
    return this.forgotPasswordForm.controls;
  }

  ngOnInit() {
    this.buildForgotPasswordForm();
  }

  buildForgotPasswordForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }

  subForgotPasswordForm() {
    const formData = this.forgotPasswordForm.value;

    const reqData = {
      email: formData.email
    }

    this.providerUserAuthService.userResetPassword(reqData).subscribe(res => {
      if (res.header.code === 200) {
        this.router.navigateByUrl('/user-auth/sign-in');
        this.appMessageService.createBasicNotification('green', res.header.message);
      } else {
        this.appMessageService.createBasicNotification('blue', res.header.message);
      }
    }, err => {
      this.appMessageService.createBasicNotification('red', 'Something went wrong');
    });
  }
}
