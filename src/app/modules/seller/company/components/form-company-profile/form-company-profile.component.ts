import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-company-profile",
  templateUrl: "./form-company-profile.component.html",
  styleUrls: ["./form-company-profile.component.scss"],
})
export class FormCompanyProfileComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.forgotPasswordForm.controls;
  }

  ngOnInit() {
    this.buildForgotPasswordForm();
  }

  buildForgotPasswordForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      mobile: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  subForgotPasswordForm() {
    const formData = this.forgotPasswordForm.value;
    // API CALL
    console.log(formData);
  }
}
