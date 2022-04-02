import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderAuthService } from "src/app/core/providers/provider-auth.service";

@Component({
  selector: "app-locked",
  templateUrl: "./locked.component.html",
  styleUrls: ["./locked.component.scss"],
})
export class LockedComponent implements OnInit {
  authForm!: FormGroup;
  submitted = false;
  userImg!: string;
  userFullName!: string;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private providerAuthService: ProviderAuthService
  ) { }
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      password: ["", Validators.required],
    });
    // this.userImg = this.providerAuthService.currentUserValue.img;
    // this.userFullName =
    //   this.providerAuthService.currentUserValue.firstName +
    //   " " +
    //   this.providerAuthService.currentUserValue.lastName;
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
  }
}
