import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-sign-up",
  templateUrl: "./page-sign-up.component.html",
  styleUrls: ["./page-sign-up.component.scss"],
})
export class PageSignUpComponent implements OnInit {
  txtCname;
  txtfname;
  txtsname;
  txtemail;
  txtpassword;
  txtcpassword;
  txtCountry;
  txtaddress1;
  txtaddress2;
  txtmNumber;

  constructor() {}

  ngOnInit(): void {}
}
