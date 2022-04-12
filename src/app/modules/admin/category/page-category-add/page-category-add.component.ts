import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-page-category-add',
  templateUrl: './page-category-add.component.html',
  styleUrls: ['./page-category-add.component.scss'],
})
export class PageCategoryAddComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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
