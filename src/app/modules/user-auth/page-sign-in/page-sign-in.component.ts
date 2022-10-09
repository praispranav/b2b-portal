import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProviderUserAuthService } from '../../../core/providers/auth/provider-user-auth.service';
import { Router } from '@angular/router';

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
      window.alert(res.header.message);
      this.providerUserAuthService.navToPortalIfAuthenticated();
    }, err => {
      window.alert('Sothing Went Wrong');
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
