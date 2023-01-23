import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderStorageService } from "../../../../../../core/providers/user/provider-storage.service";
import { ProviderTradeInformationService } from "./../../../../../../core/providers/user/provider-trade-information.service";
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
};
@Component({
  selector: "app-form-trade-information",
  templateUrl: "./form-trade-information.component.html",
  styleUrls: ["./form-trade-information.component.scss"],
})
export class FormTradeInformationComponent implements OnInit {
  tradeInformationForm: FormGroup;
  selectedOption: string;
  numbers: number = 8;
  unitList: any[] = [{ unit: "unit1" }, { unit: "unit2" }];

  fobPriceUnitList: any[] = [{ unit: "FOB unit1" }, { unit: "FOB unit2" }];

  tradeUnitList: any[] = [
    { unit: "Acres" },
    { unit: "Amperes" },
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
    { unit: "Kilo Amperes" },
    { unit: "Kilo grams" },
    { unit: "Kilo Ohms" },
    { unit: "KiloVolts" },
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
    { unit: "Pallets" },
    { unit: "Parcels" },
    { unit: "Perches" },
    { unit: "Pieces" },
    { unit: "Prints" },
    { unit: "Plants" },
    { unit: "Poles" },
    { unit: "Pounds" },
    { unit: "Quarts" },
    { unit: "Quarters" },
    { unit: "Rods" },
    { unit: "Rolls" },
    { unit: "Sets" },
    { unit: "Sheets" },
    { unit: "Short Tons" },
    { unit: "Square Centimeters" },
    { unit: "Square Feet" },
    { unit: "Square Miles" },
    { unit: "Square Yards" },
    { unit: "Stones" },
    { unit: "Strands" },
    { unit: "Tons" },
    { unit: "Tones" },
    { unit: "Trays" },
    { unit: "Twenty Foot Container" },
    { unit: "Units" },
    { unit: "Volts" },
    { unit: "Watts" },
    { unit: "Yards" },
  ];
  

  paymentTypeList: any[] = [
    { paymentType: false, type: "D/A", value: "D/A" },
    { paymentType: false, type: "D/P", value: "D/P" },
    { paymentType: false, type: "L/C", value: "L/C" },
    { paymentType: false, type: "Moneygram", value: "Moneygram" },
    { paymentType: false, type: "T/T", value: "T/T" },
    { paymentType: false, type: "Western Union", value: "Western Union" },
    { paymentType: false, type: "Other", value: "Other" },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private providerTradeInformationService: ProviderTradeInformationService,
    private storageService: ProviderStorageService
  ) {}
  @Output() formSubmitData: EventEmitter<any> = new EventEmitter<any>();
  get f() {
    return this.tradeInformationForm.controls;
  }
  get otherDetailTradeInfo() {
    return this.f.otherDetailTradeInfo as FormArray;
  }

  get bulkPrice() {
    return this.f.bulkPrice as FormArray;
  }

  get types() {
    return this.f.types as FormArray;
  }
  ngOnInit() {
    this.buildTradeInformation();
    this.addNewOtherDetails();
    this.addBulkPriceItem();
  }

  buildTradeInformation() {
    this.tradeInformationForm = this.formBuilder.group({
      sellingPriceType: ["Set Uniform Price of FOB"],
      fobPrice: [""],
      moq: [""],
      fobUnit: [""],
      bulkPrice: this.formBuilder.array([]),
      types: this.formBuilder.array([]),
      otherDetailTradeInfo: this.formBuilder.array([]),
    });
    // this.addBulkPriceItem()

    const sessionValues = this.storageService.getFormValuesFromSession(
      ProviderStorageService.productConstants.tradeInformation
    );
    if (sessionValues) {
      this.tradeInformationForm.patchValue(sessionValues);
      sessionValues.bulkPrice.forEach((prices) =>{
        console.log(prices)
        this.createFOBPriceUnits(prices.moqUnit, prices.fobUnitPrice)
      }
      );
    }
  }

  get otherDetailsArr() {
    return this.f["otherDetailTradeInfo"] as FormArray;
  }

  get bulkPriceArr() {
    return this.f["bulkPrice"] as FormArray;
  }

  get sellingPriceType() {
    return this.f["sellingPriceType"].value;
  }

  resetFormValues() {
    this.tradeInformationForm.patchValue({
      fobPrice: "",
      moq: "",
      fobUnit: "",
    });
    this.bulkPriceArr.clear();
    if (
      this.tradeInformationForm.value.sellingPriceType ===
      "Set Uniform Price of FOB"
    ) {
      this.addBulkPriceItem();
    }
  }

  createFOBPriceUnits(moqUnit = "", fobUnitPrice = ""): FormGroup {
    console.log(moqUnit, fobUnitPrice)
    return this.formBuilder.group({
      moqUnit: [ moqUnit, Validators.required],
      fobUnitPrice: [ fobUnitPrice, Validators.required],
    });
  }

  addBulkPriceItem(): void {
    if (!this.bulkPriceArr || this.bulkPriceArr.value.length <= 8) {
      this.bulkPriceArr.push(this.createFOBPriceUnits());
    }
  }

  removeBulkPriceItem(index) {
    // this.bulkPrice = this.tradeInformationForm.get('bulkPrice') as FormArray;
    this.bulkPriceArr.removeAt(index);
  }

  addPaymentType(i) {
    this.paymentTypeList[i].paymentType = !this.paymentTypeList[i].paymentType;
    console.log("Payment Type List", this.paymentTypeList)
  }

  createTypeFields(types: any[]) {
    this.paymentTypeList.forEach((type) => {
      const findType = types.find((t) => t.value === type.value);
      type.paymentType = findType ? true : false;
      this.addType(type);
    });
  }

  addType(type) {
    const typeForm = this.formBuilder.group({
      name: [type.name],
      value: [type.value],
      paymentType: [type.paymentType],
    });
    this.types.push(typeForm);
  }

  deleteType(typeIndex: number) {
    this.types.removeAt(typeIndex);
  }

  addNewOtherDetails() {
    const detailForm = this.formBuilder.group({
      other: ["", Validators.required],
    });
    this.otherDetailsArr.push(detailForm);
  }

  deleteOtherDetails(index: number): void {
    this.otherDetailsArr.removeAt(index);
  }

  async subTradeInformationForm() {
    let formData = this.tradeInformationForm.value;
    formData.paymentTypes = this.paymentTypeList.filter((i)=> i.paymentType).map((i)=>({ type: i.type, value: i.value }));

    formData.otherDetailTradeInfo = formData.otherDetailTradeInfo.map(
      (i) => i.other
    );

    let data = {
      formData,
      value: "third",
    };

    if (data.formData.sellingPriceType === "Set One FOB Price") {
      data.formData.bulkPrice = [];
    }
    this.storageService.setFormValuesToSession(
      ProviderStorageService.productConstants.tradeInformation,
      data.formData
    );
    
    debugger;
    this.formSubmitData.emit(data);
  }

  private resetFormGroup(form: FormGroup) {
    form.reset();
  }
}
