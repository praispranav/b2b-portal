import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-forgot-password",
  templateUrl: "./page-forgot-password.component.html",
  styleUrls: ["./page-forgot-password.component.scss"],
})
export class PageForgotPasswordComponent implements OnInit {
  txtusername;
  txtemail;

  forgotPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    thisbuildForgotPasswordForm();
  }

  get f(){ return  this.forgotPasswordForm.controls; }

  buildForgotPasswordForm(){
    this.forgotPasswordForm = this.formBuilder.group({
      mobile: [''],
      email: ['']
    });
  }

  subForgotPasswordForm(){
    const formData = this.forgotPasswordForm.value;

    // API CALL
    console.log(formData);
  }
}
