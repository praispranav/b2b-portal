import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-page-reset-password',
  templateUrl: './page-reset-password.component.html',
  styleUrls: ['./page-reset-password.component.scss']
})
export class PageResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get f() {
    return this.resetPasswordForm.controls;
  }

  ngOnInit() {
    this.buildresetPasswordForm();
  }

  buildresetPasswordForm() {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required, ]],
    });
  }

  subresetPasswordForm() {
    const formData = this.resetPasswordForm.value;
    // API CALL
    console.log(formData);
  }
}
