import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProviderUserAuthService } from "../../../core/providers/auth/provider-user-auth.service";
import { AppMessageService } from "../../../core/services/app-message.service";

@Component({
  selector: 'app-page-reset-password',
  templateUrl: './page-reset-password.component.html',
  styleUrls: ['./page-reset-password.component.scss']
})
export class PageResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  id: string;
  token: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerUserAuthService: ProviderUserAuthService
  ) { }

  get f() {
    return this.resetPasswordForm.controls;
  }

  ngOnInit() {
    this.buildresetPasswordForm();
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.token = params['token'];

      if (this.id && this.token) { } else {
        this.router.navigateByUrl('/user-auth/sign-in');
        this.appMessageService.createBasicNotification('red', 'Invalid Request');
      }
    });
  }

  buildresetPasswordForm() {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
    });
  }

  subresetPasswordForm() {
    const formData = this.resetPasswordForm.value;

    const reqData = {
      _id: this.id,
      resetToken: this.token,
      newPassword: formData.newPassword
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
