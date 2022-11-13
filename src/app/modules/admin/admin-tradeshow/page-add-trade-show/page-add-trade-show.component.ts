import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import * as moment from "moment";
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterStateService } from '../../../../core/providers/master/provider-mater-state.service';
import { ProviderMaterLocationService } from '../../../../core/providers/master/provider-mater-location.service';
@Component({
  selector: 'app-page-add-trade-show',
  templateUrl: './page-add-trade-show.component.html',
  styleUrls: ['./page-add-trade-show.component.scss']
})
export class PageAddTradeShowComponent implements OnInit {
  handleChange(event) { }
  otherImages(event) { }
  
  addTradeShowForm: FormGroup;
  

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
  searchOptions=[
    {label: "Demo", value: "demo"},
    {label: "Test", value: "test"},
    {label: "Dummy", value: "dummy"},
    {label: "Testing", value: "testing"},
  ];
  stateList=[
    { label:"UP",value:"uttarpradessh"},
    {label:"UK",value:"Uttarakhand",},
    {label:"Delhi",value:"Delhi",}
  ]
  cityList=[
     { label:"bageshwar", value: "Bageshwar"},
    {label:"Delhi",value:"Delhi"}
]
  constructor(private router: Router,
    private formBuilder: FormBuilder, ) { }
    get f() {
      return this.addTradeShowForm.controls;
    }
  ngOnInit() {
    this.buildTradeShowForm();
   
  }
  buildTradeShowForm() {
    this.addTradeShowForm = this.formBuilder.group({
      eventName: ["", [Validators.required]],
      organiser: ["", [Validators.required]],
      EventType: ["", [Validators.required]],
      category: ["", [Validators.required]],
      exbitedItem: ["", [Validators.required]],
      
      countryCode:["",Validators.required],
      Country:["",Validators.required],
      state:["",Validators.required],
      city:["",Validators.required],
      phone: ["", [Validators.required]],
      venue: ["", [Validators.required]],
     
      fromDate: ["", [Validators.required]],
      toDate: ["", [Validators.required]],
      
      bannerImage: ["", [Validators.required]],
      OtherImages: ["", [Validators.required]],
      tradeShowDescription: ["", [Validators.required]],

      keywords: ["", [Validators.required]],
      tags: ["", [Validators.required]],
    });
  }
  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

 
}
