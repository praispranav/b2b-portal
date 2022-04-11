import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-forgot-password",
  templateUrl: "./page-forgot-password.component.html",
  styleUrls: ["./page-forgot-password.component.scss"],
})
export class PageForgotPasswordComponent implements OnInit {
  txtfname;
  txtlname;
  txtusername;
  txtpassword;
  txtemail;

  constructor() {}

  ngOnInit() {}
}
