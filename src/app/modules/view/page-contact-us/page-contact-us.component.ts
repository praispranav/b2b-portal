import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { pgSelectfx } from "../../../@pages/components/cs-select/select.module";
import * as moment from "moment";

@Component({
  selector: "app-page-contact-us",
  templateUrl: "./page-contact-us.component.html",
  styleUrls: ["./page-contact-us.component.scss"],
})
export class PageContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  mask = {
    date: [/[1-9]/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    telephone: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
    custom: [/[1-9]/, /\d/, "-", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    ssn: [/[1-9]/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
  };
  numberMask = createNumberMask({
    prefix: "$ ",
    suffix: "",
  });
  wierdMask = createNumberMask({
    prefix: "",
    suffix: "",
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
  });
  dollarPrefix = createNumberMask({
    prefix: "$ ",
    suffix: "",
    allowDecimal: true,
  });
  range = createNumberMask({
    prefix: "",
    suffix: "",
    integerLimit: 4,
  });

  constructor(private fb: FormBuilder) {}

  get f() { return this.contactUsForm.controls; }

  ngOnInit() {
    this.buidlContactUsForm();
  }

  buidlContactUsForm() {
    this.contactUsForm = this.fb.group({
      companyName: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["",[Validators.required]],
      email: ["", [Validators.email,Validators.required]],
      Country: ["", [Validators.required]],
      State: ["", [Validators.required]],

      City: ["", [Validators.required]],
      countryCode: ["",[Validators.required]],
      mobile: ["",[Validators.required]],
      description: ["", [Validators.required]],
    });
  }
}
