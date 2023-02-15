import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProviderUserAuthService } from "../../../core/providers/auth/provider-user-auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AppMessageService } from "../../../core/services/app-message.service";

interface LooseObject {
  [key: string]: any;
}

@Component({
  selector: "app-page-sign-in",
  templateUrl: "./page-sign-in.component.html",
  styleUrls: ["./page-sign-in.component.scss"],
})
export class PageSignInComponent implements OnInit {
  authSignInForm: FormGroup;
  showPassword = false;
  id: string;
  token: string;
  email: string;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private providerUserAuthService: ProviderUserAuthService,
    private appMessageService: AppMessageService
  ) {}

  get f() {
    return this.authSignInForm.controls;
  }

  ngOnInit(): void {
    this.buildForm();
    const rememberMeCredentials =
      this.providerUserAuthService.getRememberMeCredentials;
    if (rememberMeCredentials) {
      this.f.email.setValue(rememberMeCredentials.email);
      this.f.password.setValue(rememberMeCredentials.password);
      this.f.rememberMe.setValue(rememberMeCredentials.rememberMe);
    }

    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
      this.token = params["token"];
      this.email = params["email"];
      this.password = params["psd"];

      if (this.email && this.password) {
        this.authSignInFormSub(this.email, this.password);
      }

      if (
        this.id &&
        this.token &&
        this.router.url.includes("/user-auth/sign-up-verify")
      ) {
        const reqData = {
          _id: this.id,
          secretToken: this.token,
        };

        this.providerUserAuthService
          .userSignUpVerify({ ...reqData, origin: window.location.origin })
          .subscribe(
            (res) => {
              if (res.header.code === 200) {
                this.providerUserAuthService.navToPortalIfAuthenticated();
                this.appMessageService.createBasicNotification(
                  "green",
                  res.header.message
                );
              } else {
                this.router.navigateByUrl("/user-auth/sign-in");
                this.appMessageService.createBasicNotification(
                  "blue",
                  res.header.message
                );
              }
            },
            (err) => {
              this.router.navigateByUrl("/user-auth/sign-in");
              this.appMessageService.createBasicNotification(
                "red",
                "Something went wrong"
              );
            }
          );
      } else if (this.router.url.includes("/user-auth/sign-up-verify")) {
        this.router.navigateByUrl("/user-auth/sign-in");
        this.appMessageService.createBasicNotification(
          "red",
          "Invalid Request"
        );
      }
    });
  }

  buildForm() {
    this.authSignInForm = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      rememberMe: [true],
    });
  }

  async authSignInFormSub(email, password) {
    const formData = this.authSignInForm.value;
    const isEmail = isNaN(formData.email);
    const reqData: LooseObject = {
      password: formData.password,
    };

    if (isEmail) {
      reqData.email = formData.email;
    } else {
      reqData.phone = formData.email;
    }
    if (email && password) {
      (reqData.email = email), (reqData.password = password);
    }

    if (formData.rememberMe) {
      this.providerUserAuthService.setRememberMeCredentials = formData;
    } else {
      this.providerUserAuthService.setRememberMeCredentials = {
        email: email ? email : formData.email,
        rememberMe: false,
      };
    }

    this.providerUserAuthService
      .userSignIn({ ...reqData, origin: window.location.origin })
      .subscribe(
        (res) => {
          if (res.header.code === 200) {
            this.providerUserAuthService.navToPortalIfAuthenticated();
            this.appMessageService.createBasicNotification(
              "green",
              res.header.message
            );
          } else {
            this.appMessageService.createBasicNotification(
              "blue",
              res.header.message
            );
          }
        },
        (err) => {
          this.appMessageService.createBasicNotification(
            "red",
            "Something went wrong"
          );
        }
      );
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  forgotPasswordNavigate() {
    this.router.navigateByUrl("/auth/page-forgot-password-get-user");
  }

  signUpNavigate() {
    this.router.navigateByUrl("/auth/page-sign-up");
  }
}
