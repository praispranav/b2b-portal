import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-trade-information',
  templateUrl: './form-trade-information.component.html',
  styleUrls: ['./form-trade-information.component.scss']
})
export class FormTradeInformationComponent implements OnInit {

  tradeInformationForm: FormGroup;
  numbers: number = 8;
  unitList: any[] =
    [
      { unit: "unit1" },
      { unit: "unit2" },

    ]

  fobPriceUnitList: any[] =
    [
      { unit: "FOB unit1" },
      { unit: "FOB unit2" },

    ]

  paymentTypeList: any[] =
    [
      { type: "D/A" },
      { type: "D/P" },
      { type: "L/C" },
      { type: "Moneygram" },
      { type: "T/T" },
      { type: "Western Union" },

    ]
  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.tradeInformationForm.controls;
  }

  ngOnInit() {
    this.buildtradeInformation();
  }

  buildtradeInformation() {
    this.tradeInformationForm = this.formBuilder.group({
      sellingPrice: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      moq: ['', [Validators.required]],
      moqUnit: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      fobPriceUnit: ['', [Validators.required]],

      Other: ['', [Validators.required]],
    });
  }

}
