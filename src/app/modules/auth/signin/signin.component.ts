import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderAuthService } from "src/app/core/providers/provider-auth.service";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private providerAuthService: ProviderAuthService
  ) {
    this.authForm = this.formBuilder.group({});
  }
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ["admin@hospital.org", Validators.required],
      password: ["admin@123", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  adminSet() {
    // this.f?.username.setValue("admin@hospital.org");
    // this.f?.password.setValue("admin@123");
  }
  doctorSet() {
    // this.f?.username.setValue("doctor@hospital.org");
    // this.f?.password.setValue("doctor@123");
  }
  patientSet() {
    // this.f?.username.setValue("patient@hospital.org"); 
    // this.f?.password.setValue("patient@123");
  }
  onSubmit() {
    // this.submitted = true;
    // this.error = "";
  }
}
