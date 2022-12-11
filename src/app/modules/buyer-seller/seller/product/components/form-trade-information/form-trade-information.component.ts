import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderTradeInformationService } from './../../../../../../core/providers/user/provider-trade-information.service';
export type tradeInfo = {
  sellingPrice: string;
  unit: string;
  moq: string;
  fobUnit: string;
  fobPriceUnit1: string;
  fobPriceUnit2: string;
  fobPriceUnit3: string;
  fobPriceUnit4: string;
  fobPriceUnit5: string;
  fobPriceUnit6: string;
  fobPriceUnit7: string;
  fobPriceUnit8: string;
  moqPerUnit1: string;
  moqPerUnit2: string;
  moqPerUnit3: string;
  moqPerUnit4: string;
  moqPerUnit5: string;
  moqPerUnit6: string;
  moqPerUnit7: string;
  moqPerUnit8: string;
  paymentType: string;

  timestamp?: Date;
}
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
      { paymentType: false, type: "D/A", value: "D/A" },
      { paymentType: false, type: "D/P", value: "D/P" },
      { paymentType: false, type: "L/C", value: "L/C" },
      { paymentType: false, type: "Moneygram", value: "Moneygram" },
      { paymentType: false, type: "T/T", value: "T/T" },
      { paymentType: false, type: "Western Union", value: "Western Union" },
      { paymentType: false, type: "Other", value: "Other" },


    ]
  constructor(private formBuilder: FormBuilder, private providerTradeInformationService: ProviderTradeInformationService) { }
  @Output() formSubmitData: EventEmitter<any> = new EventEmitter<any>();
  get f() {
    return this.tradeInformationForm.controls;
  }
  get otherDetail() {
    return this.f.otherDetail as FormArray;
  }
  get types() {
    return this.f.types as FormArray;
  }
  ngOnInit() {
    this.buildTradeInformation();
    this.addNewOtherDetails();
  }

  buildTradeInformation() {
    this.tradeInformationForm = this.formBuilder.group({
      sellingPrice: [""],
      unit: [""],
      moq: [""],
      fobUnit: [""],
      fobPriceUnit1: [""],
      fobPriceUnit2: [""],
      fobPriceUnit3: [""],
      fobPriceUnit4: [""],
      fobPriceUnit5: [""],
      fobPriceUnit6: [""],
      fobPriceUnit7: [""],
      fobPriceUnit8: [""],
      moqPerUnit1: [""],
      moqPerUnit2: [""],
      moqPerUnit3: [""],
      moqPerUnit4: [""],
      moqPerUnit5: [""],
      moqPerUnit6: [""],
      moqPerUnit7: [""],
      moqPerUnit8: [""],
      types: this.formBuilder.array([]),
      otherDetail: this.formBuilder.array([]),
    });
  }
  get otherDetailsArr() {
    return this.f["otherDetail"] as FormArray;
  }
  createTypeFields(types: any[]) {
    this.paymentTypeList.forEach(type => {
      const findType = types.find(t => t.value === type.value);
      type.paymentType = findType ? true : false;
      this.addType(type);
    });
  }

  addType(type) {
    const typeForm = this.formBuilder.group({
      name: [type.name],
      value: [type.value],
      paymentType: [type.paymentType]
    });
    this.types.push(typeForm);
  }

  deleteType(typeIndex: number) {
    this.types.removeAt(typeIndex);
  }
  addNewOtherDetails() {
    const detailForm = this.formBuilder.group({
      other: ['', Validators.required]
    });
    this.otherDetailsArr.push(detailForm);
  }
  deleteOtherDetails(index: number): void {
    this.otherDetailsArr.removeAt(index);
  }
  async subTradeInformationForm() {
    let formData = this.tradeInformationForm.value
    let data = {
      formData: formData,
      value: 'third'
    }
    formData.otherDetail = formData.otherDetail.map(i => i.other);
    formData.types = formData.types.filter(t => t.paymentType);

    this.formSubmitData.emit(data);

  }
  private resetFormGroup(form: FormGroup) {
    form.reset();
  }
}
