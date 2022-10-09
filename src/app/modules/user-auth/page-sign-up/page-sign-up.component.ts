import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderUserAuthService } from "./../../../core/providers/auth/provider-user-auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-page-sign-up",
  templateUrl: "./page-sign-up.component.html",
  styleUrls: ["./page-sign-up.component.scss"],
})
export class PageSignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private providerUserAuthService: ProviderUserAuthService,
  ) {}

  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    this.buildSignUpForm();
  }

  buildSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      company: ["", [Validators.required]],
      fName: ["", [Validators.required]],
      lName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      password: ["", [Validators.required]],
      cpassword: ["", [Validators.required]],
      country: ["", [Validators.required]],
      address1: ["", [Validators.required]],
      address2: [""],
      role: ["", [Validators.required]]
    });
  }

  subSignUpForm() {
    const params = this.signUpForm.value;
    params.role = params.role === 'buyer' ? 'buyer' : 'seller';
    this.providerUserAuthService.userSignUp(params).subscribe(res => {
      window.alert(res.header.message);
      this.providerUserAuthService.navToPortalIfAuthenticated();
    }, err => {
      window.alert('Sothing Went Wrong');
    });
  }
}
