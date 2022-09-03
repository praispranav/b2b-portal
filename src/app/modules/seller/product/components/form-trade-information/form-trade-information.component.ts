import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderTradeInformationService } from './../../../../../core/providers/user/provider-trade-information.service';

@Component({
  selector: 'app-form-trade-information',
  templateUrl: './form-trade-information.component.html',
  styleUrls: ['./form-trade-information.component.scss']
})
export class FormTradeInformationComponent implements OnInit {

  tradeInformationForm: FormGroup;
  selectedOption: string;
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

  tradeUnitList: any[] = [
    { unit: "Acres" },
    { unit: "mperes" },
    { unit: "Bags" },
    { unit: "Barrels" },
    { unit: "Blades" },
    { unit: "Boxes" },
    { unit: "Bushes" },
    { unit: "Carats" },
    { unit: "Cartons" },
    { unit: "Cases" },
    { unit: "Centimetres" },
    { unit: "Chains" },
    { unit: "Combos" },
    { unit: "Cubic centimetres" },
    { unit: "Cubic Feet" },
    { unit: "Cubic Inches" },
    { unit: "Cubic Meters" },
    { unit: "Cubic Yards" },
    { unit: "Degree Celsius" },
    { unit: "Degrees Fahrenheit" },
    { unit: "Dozens" },
    { unit: "Drums" },
    { unit: "Fluid Ounces" },
    { unit: "Feet" },
    { unit: "Forty foot Container" },
    { unit: "Furlongs" },
    { unit: "Gallons" },
    { unit: "Gills" },
    { unit: "Grains" },
    { unit: "Gross" },
    { unit: "Hectares" },
    { unit: "Hertz" },
    { unit: "Inches" },
    { unit: "Kiloamperes" },
    { unit: "Kilograms" },
    { unit: "Kiloohms" },
    { unit: "Kiloviolts" },
    { unit: "Kilowatts" },
    { unit: "Litters" },
    { unit: "Long Tons" },
    { unit: "Megahertz" },
    { unit: "Meters" },
    { unit: "Miles" },
    { unit: "Milligrams" },
    { unit: "Millihertz" },
    { unit: "Milliliters" },
    { unit: "Milliohms" },
    { unit: "Millivolts" },
    { unit: "Milliwatts" },
    { unit: "Nautical Miles" },
    { unit: "Ohms" },
    { unit: "Ounce" },
    { unit: "Packs" },
    { unit: "Pair" },
  ]


  paymentTypeList: any[] =
    [
      { type: "D/A" },
      { type: "D/P" },
      { type: "L/C" },
      { type: "Moneygram" },
      { type: "T/T" },
      { type: "Western Union" },
      { type: "Other" },


    ]
  constructor(private formBuilder: FormBuilder, private providerTradeInformationService: ProviderTradeInformationService) { }

  get f() {
    return this.tradeInformationForm.controls;
  }

  ngOnInit() {
    this.buildTradeInformation();
  }
  buildTradeInformation() {
    this.tradeInformationForm = this.formBuilder.group({
      sellingPrice: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      moq: ['', [Validators.required]],
      MoqPerUnit: ['', [Validators.required]],
      paymentType: ['', [Validators.required]],
      fobUnit: ['', [Validators.required]],
      fobPriceUnit: ['', [Validators.required]],
      Other: ['', [Validators.required]],
    });
  }

  async subTradeInformationForm() {

    this.providerTradeInformationService.addTradeInformation(this.tradeInformationForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.tradeInformationForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }
  private resetFormGroup(form: FormGroup) {
    form.reset();
  }
}
