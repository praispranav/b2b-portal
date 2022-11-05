import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderUserAuthService } from "./../../../core/providers/auth/provider-user-auth.service";
import { Router } from '@angular/router';
import { MessageService } from "../../../@pages/components/message/message.service";
import { AppMessageService } from "../../../core/services/app-message.service";


@Component({
  selector: "app-page-sign-up",
  templateUrl: "./page-sign-up.component.html",
  styleUrls: ["./page-sign-up.component.scss"],
})
export class PageSignUpComponent implements OnInit {
  signUpForm: FormGroup;
  selectedOption;
  options = [
    { value: 'India', label: 'India' },
    { value: 'China', label: 'China' },
    { value: 'Pakistan', label: 'Pakistan' }
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private providerUserAuthService: ProviderUserAuthService,
    private messageService: MessageService,
    private appMessageService: AppMessageService,
  ) { }

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
      country: ["", [Validators.required],],
      address1: ["", [Validators.required]],
      city: [""],
      role: ["", [Validators.required]]
    });
  }

  subSignUpForm() {
    const params = this.signUpForm.value;
    params.role = params.role === 'buyer' ? 'buyer' : 'seller';
    this.providerUserAuthService.userSignUp(params).subscribe(res => {
      // window.alert(res.header.message);
      this.providerUserAuthService.navToPortalIfAuthenticated();
      this.appMessageService.createBasicNotification(res.header.message, 'Sign In Succesfully');
    }, err => {
      console.log(err , 'error Msg')
      this.appMessageService.createBasicNotification(err.header.message, 'Something Went Wrong');
      // window.alert('Sothing Went Wrong');

    });
  }
}
