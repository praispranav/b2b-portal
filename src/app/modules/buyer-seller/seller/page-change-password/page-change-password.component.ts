import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { MessageService } from "../../../../@pages/components/message/message.service";
import { ProviderUserAuthService } from "../../../../core/providers/auth/provider-user-auth.service";

@Component({
  selector: "app-page-change-password",
  templateUrl: "./page-change-password.component.html",
  styleUrls: ["./page-change-password.component.scss"],
})
export class PageChangePasswordComponent implements OnInit {
  email: string = "";
  changePasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private userAuthService: ProviderUserAuthService, private messagingService: MessageService) {
    this.buildResetPasswordForm();
  }

  ngOnInit() {}

  get f() {
    return this.changePasswordForm.controls;
  }

  buildResetPasswordForm() {
    this.changePasswordForm = this.fb.group({
      oldPassword: [""],
      password: [
        null,
        Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          CustomValidators.patternValidator(
            /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
            { hasSpecialCharacters: true }
          ),
          Validators.minLength(8),
        ]),
      ],
      cpassword: [null, Validators.compose([Validators.required])],
    });
  }

  changePassword(){
    const paylaod = this.changePasswordForm.value
    this.userAuthService.userChangePassword(paylaod).subscribe((res)=>{
      if(res.header.code === 200){
        this.messagingService.success(res.header.message);
      } else this.messagingService.error(res.header.message)
    })
  }
}

export class CustomValidators {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }
  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get("password").value; // get password from our password form control
    const confirmPassword: string = control.get("cpassword").value;
    if (password !== confirmPassword) {
      control.get("cpassword").setErrors({ NoPassswordMatch: true });
    }
  }
}
