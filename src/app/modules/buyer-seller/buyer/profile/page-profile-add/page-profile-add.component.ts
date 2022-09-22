import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import * as moment from "moment"
@Component({
  selector: 'app-page-profile-add',
  templateUrl: './page-profile-add.component.html',
  styleUrls: ['./page-profile-add.component.scss']
})
export class PageProfileAddComponent implements OnInit {
  contactUsForm:FormGroup;
  constructor( private fb:FormBuilder) { }
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
  get f() { return this.contactUsForm.controls; }
  ngOnInit() {
    this.buidlContactUsForm();
  }
  
  buidlContactUsForm() {
    this.contactUsForm = this.fb.group({
      companyName: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["",[Validators.required]],
      AccountType:['',[Validators.required]],
      email: ["", [Validators.email,Validators.required]],
      Country: ["", [Validators.required]],
      State: ["", [Validators.required]],

      City: ["", [Validators.required]],
      countryCode: ["",[Validators.required]],
      phoneCountryCode: ["",[Validators.required]],
      mobileCountryCode: ["",[Validators.required]],
      mobile: ["",[Validators.required]],
      phone: ["",[Validators.required]],
      Address1: ["", [Validators.required]],
      Address2: ["", [Validators.required]],
      agreeCheckBox:["",[Validators.required]]
    });
  }
}
