import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProviderUserAuthService } from '../../../core/providers/auth/provider-user-auth.service';
import { Router } from '@angular/router';
import { MessageService } from '../../../@pages/components/message/message.service';
import { AppMessageService } from '../../../core/services/app-message.service';

interface LooseObject {
  [key: string]: any
}

@Component({
  selector: "app-page-sign-in",
  templateUrl: "./page-sign-in.component.html",
  styleUrls: ["./page-sign-in.component.scss"],
})
export class PageSignInComponent implements OnInit {
  authSignInForm: FormGroup;
  showPassword = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private providerUserAuthService: ProviderUserAuthService,
    private messageService: MessageService,
    private appMessageService: AppMessageService,
  ) { }

  get f() { return this.authSignInForm.controls; }

  ngOnInit(): void {
    this.buildForm();
    const rememberMeCredentials = this.providerUserAuthService.getRememberMeCredentials;
    if (rememberMeCredentials) {
      this.f.email.setValue(rememberMeCredentials.email);
      this.f.password.setValue(rememberMeCredentials.password);
      this.f.rememberMe.setValue(rememberMeCredentials.rememberMe);
    }
  }

  buildForm() {
    this.authSignInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [true]
    });
  }

  async authSignInFormSub() {
    const formData = this.authSignInForm.value;
    const isEmail = isNaN(formData.email);
    const reqData: LooseObject = {
      password: formData.password
    };

    if (isEmail) {
      reqData.email = formData.email;
    } else {
      reqData.phone = formData.email;
    }

    if (formData.rememberMe) {
      this.providerUserAuthService.setRememberMeCredentials = formData;
    } else {
      this.providerUserAuthService.setRememberMeCredentials = {
        email: formData.email,
        rememberMe: false
      };
    }
    this.providerUserAuthService.userSignIn(reqData).subscribe(res => {
      console.log(res.header.message)
      // this.appMessageService.createBasicNotification(res.header.message, 'Sign In Succesfully');
      this.providerUserAuthService.navToPortalIfAuthenticated();
      this.appMessageService.createBasicNotification(res.header.message, 'Sign In Succesfully');
      
    }, err => {
      console.log(err.header.message)
      this.appMessageService.createBasicNotification(err.header.message, 'Invalid Credential');
      // window.alert(err.header.message)
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  forgotPasswordNavigate() {
    this.router.navigateByUrl('/auth/page-forgot-password-get-user');
  }

  signUpNavigate() {
    this.router.navigateByUrl('/auth/page-sign-up');
  }
}
