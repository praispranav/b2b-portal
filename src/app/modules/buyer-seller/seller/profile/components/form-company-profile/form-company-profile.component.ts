import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppMessageService } from "../../../../../../core/services/app-message.service";
import { ProviderCompanyProfileService } from "../../../../../../core/providers/user/provider-company-profile.service";
import { ProviderMaterCountryService } from "../../../../../../core/providers/master/provider-mater-country.service";
import { ProviderMaterStateService } from "../../../../../../core/providers/master/provider-mater-state.service";
import { ProviderMaterLocationService } from "../../../../../../core/providers/master/provider-mater-location.service";
import { ProviderCategoryService } from "../../../../../../core/providers/user/provider-category.service";

@Component({
  selector: "app-form-company-profile",
  templateUrl: "./form-company-profile.component.html",
  styleUrls: ["./form-company-profile.component.scss"],
})
export class FormCompanyProfileComponent implements OnInit {
  isLoading = true;
  isDataExist: boolean;
  idIfDataExist: string;
  file: File;
  fileType: any | string;
  fileName: string = "";
  imageBase64: string | any = "";
  companyProfileForm: FormGroup;
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  additionalArray: FormArray = new FormArray([]);
  additionalProfiles: any[] = [];
  formGroup: FormGroup;
  mobileArray: FormArray = new FormArray([]);
  landlineArray: FormArray = new FormArray([]);
  mobileProfiles: any[] = [];
  landlineProfiles: any[] = [];
  serviceSubscription: Subscription[] = [];
  addtionalDetails: boolean = true;
  categoryOptions = [
    { value: "Apparel", label: "Apparel" },
    { value: "Cloth", label: "Cloth" },
    { value: "Shoes", label: "Shoes" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];
  productOptions = [
    { value: "product1", label: "product1" },
    { value: "product2", label: "product2" },
    { value: "product3", label: "product3" },
    { value: "product4", label: "product4" },
    { value: "product5", label: "product5" },
    { value: "product6", label: "product6" },
  ];
  // mainProduct = ['Product1', 'Product2'];
  divisions = [
    { value: "Branch", label: "Branch" },
    { value: "Network", label: "Network" },
    { value: "Factory", label: "Factory" },
    { value: "International Office", label: "International Office" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Showroom", label: "Showroom " },
    { value: "Sister Concern", label: "Sister Concern" },
    { value: "Trading Division", label: "Trading Division" },
    { value: "Warehouse ", label: "Warehouse" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];
  unit = [
    { value: "Square Meter", label: "Square Meter" },
    { value: "Square Feet", label: "Square Feet" },
    { value: "Square yard", label: "Square yard" },
    { value: " Acre", label: "Acre" },
    { value: "Hectre", label: "Hectre" },
  ];
  codes = [
    { country: "Afghanistan", code: "93", iso: "AF" },
    { country: "Albania", code: "355", iso: "AL" },
    { country: "Algeria", code: "213", iso: "DZ" },
    { country: "American Samoa", code: "1-684", iso: "AS" },
    { country: "Andorra", code: "376", iso: "AD" },
    { country: "Angola", code: "244", iso: "AO" },
    { country: "Anguilla", code: "1-264", iso: "AI" },
    { country: "Antarctica", code: "672", iso: "AQ" },
    { country: "Antigua and Barbuda", code: "1-268", iso: "AG" },
    { country: "Argentina", code: "54", iso: "AR" },
    { country: "Armenia", code: "374", iso: "AM" },
    { country: "Aruba", code: "297", iso: "AW" },
    { country: "Australia", code: "61", iso: "AU" },
    { country: "Austria", code: "43", iso: "AT" },
    { country: "Azerbaijan", code: "994", iso: "AZ" },
    { country: "Bahamas", code: "1-242", iso: "BS" },
    { country: "Bahrain", code: "973", iso: "BH" },
    { country: "Bangladesh", code: "880", iso: "BD" },
    { country: "Barbados", code: "1-246", iso: "BB" },
    { country: "Belarus", code: "375", iso: "BY" },
    { country: "Belgium", code: "32", iso: "BE" },
    { country: "Belize", code: "501", iso: "BZ" },
    { country: "Benin", code: "229", iso: "BJ" },
    { country: "Bermuda", code: "1-441", iso: "BM" },
    { country: "Bhutan", code: "975", iso: "BT" },
    { country: "Bolivia", code: "591", iso: "BO" },
    { country: "Bosnia and Herzegovina", code: "387", iso: "BA" },
    { country: "Botswana", code: "267", iso: "BW" },
    { country: "Brazil", code: "55", iso: "BR" },
    { country: "British Indian Ocean Territory", code: "246", iso: "IO" },
    { country: "British Virgin Islands", code: "1-284", iso: "VG" },
    { country: "Brunei", code: "673", iso: "BN" },
    { country: "Bulgaria", code: "359", iso: "BG" },
    { country: "Burkina Faso", code: "226", iso: "BF" },
    { country: "Burundi", code: "257", iso: "BI" },
    { country: "Cambodia", code: "855", iso: "KH" },
    { country: "Cameroon", code: "237", iso: "CM" },
    { country: "Canada", code: "1", iso: "CA" },
    { country: "Cape Verde", code: "238", iso: "CV" },
    { country: "Cayman Islands", code: "1-345", iso: "KY" },
    { country: "Central African Republic", code: "236", iso: "CF" },
    { country: "Chad", code: "235", iso: "TD" },
    { country: "Chile", code: "56", iso: "CL" },
    { country: "China", code: "86", iso: "CN" },
    { country: "Christmas Island", code: "61", iso: "CX" },
    { country: "Cocos Islands", code: "61", iso: "CC" },
    { country: "Colombia", code: "57", iso: "CO" },
    { country: "Comoros", code: "269", iso: "KM" },
    { country: "Cook Islands", code: "682", iso: "CK" },
    { country: "Costa Rica", code: "506", iso: "CR" },
    { country: "Croatia", code: "385", iso: "HR" },
    { country: "Cuba", code: "53", iso: "CU" },
    { country: "Curacao", code: "599", iso: "CW" },
    { country: "Cyprus", code: "357", iso: "CY" },
    { country: "Czech Republic", code: "420", iso: "CZ" },
    { country: "Democratic Republic of the Congo", code: "243", iso: "CD" },
    { country: "Denmark", code: "45", iso: "DK" },
    { country: "Djibouti", code: "253", iso: "DJ" },
    { country: "Dominica", code: "1-767", iso: "DM" },
    { country: "Dominican Republic", code: "1-809, 1-829, 1-849", iso: "DO" },
    { country: "East Timor", code: "670", iso: "TL" },
    { country: "Ecuador", code: "593", iso: "EC" },
    { country: "Egypt", code: "20", iso: "EG" },
    { country: "El Salvador", code: "503", iso: "SV" },
    { country: "Equatorial Guinea", code: "240", iso: "GQ" },
    { country: "Eritrea", code: "291", iso: "ER" },
    { country: "Estonia", code: "372", iso: "EE" },
    { country: "Ethiopia", code: "251", iso: "ET" },
    { country: "Falkland Islands", code: "500", iso: "FK" },
    { country: "Faroe Islands", code: "298", iso: "FO" },
    { country: "Fiji", code: "679", iso: "FJ" },
    { country: "Finland", code: "358", iso: "FI" },
    { country: "France", code: "33", iso: "FR" },
    { country: "French Polynesia", code: "689", iso: "PF" },
    { country: "Gabon", code: "241", iso: "GA" },
    { country: "Gambia", code: "220", iso: "GM" },
    { country: "Georgia", code: "995", iso: "GE" },
    { country: "Germany", code: "49", iso: "DE" },
    { country: "Ghana", code: "233", iso: "GH" },
    { country: "Gibraltar", code: "350", iso: "GI" },
    { country: "Greece", code: "30", iso: "GR" },
    { country: "Greenland", code: "299", iso: "GL" },
    { country: "Grenada", code: "1-473", iso: "GD" },
    { country: "Guam", code: "1-671", iso: "GU" },
    { country: "Guatemala", code: "502", iso: "GT" },
    { country: "Guernsey", code: "44-1481", iso: "GG" },
    { country: "Guinea", code: "224", iso: "GN" },
    { country: "Guinea-Bissau", code: "245", iso: "GW" },
    { country: "Guyana", code: "592", iso: "GY" },
    { country: "Haiti", code: "509", iso: "HT" },
    { country: "Honduras", code: "504", iso: "HN" },
    { country: "Hong Kong", code: "852", iso: "HK" },
    { country: "Hungary", code: "36", iso: "HU" },
    { country: "Iceland", code: "354", iso: "IS" },
    { country: "India", code: "91", iso: "IN" },
    { country: "Indonesia", code: "62", iso: "ID" },
    { country: "Iran", code: "98", iso: "IR" },
    { country: "Iraq", code: "964", iso: "IQ" },
    { country: "Ireland", code: "353", iso: "IE" },
    { country: "Isle of Man", code: "44-1624", iso: "IM" },
    { country: "Israel", code: "972", iso: "IL" },
    { country: "Italy", code: "39", iso: "IT" },
    { country: "Ivory Coast", code: "225", iso: "CI" },
    { country: "Jamaica", code: "1-876", iso: "JM" },
    { country: "Japan", code: "81", iso: "JP" },
    { country: "Jersey", code: "44-1534", iso: "JE" },
    { country: "Jordan", code: "962", iso: "JO" },
    { country: "Kazakhstan", code: "7", iso: "KZ" },
    { country: "Kenya", code: "254", iso: "KE" },
    { country: "Kiribati", code: "686", iso: "KI" },
    { country: "Kosovo", code: "383", iso: "XK" },
    { country: "Kuwait", code: "965", iso: "KW" },
    { country: "Kyrgyzstan", code: "996", iso: "KG" },
    { country: "Laos", code: "856", iso: "LA" },
    { country: "Latvia", code: "371", iso: "LV" },
    { country: "Lebanon", code: "961", iso: "LB" },
    { country: "Lesotho", code: "266", iso: "LS" },
    { country: "Liberia", code: "231", iso: "LR" },
    { country: "Libya", code: "218", iso: "LY" },
    { country: "Liechtenstein", code: "423", iso: "LI" },
    { country: "Lithuania", code: "370", iso: "LT" },
    { country: "Luxembourg", code: "352", iso: "LU" },
    { country: "Macao", code: "853", iso: "MO" },
    { country: "Macedonia", code: "389", iso: "MK" },
    { country: "Madagascar", code: "261", iso: "MG" },
    { country: "Malawi", code: "265", iso: "MW" },
    { country: "Malaysia", code: "60", iso: "MY" },
    { country: "Maldives", code: "960", iso: "MV" },
    { country: "Mali", code: "223", iso: "ML" },
    { country: "Malta", code: "356", iso: "MT" },
    { country: "Marshall Islands", code: "692", iso: "MH" },
    { country: "Mauritania", code: "222", iso: "MR" },
    { country: "Mauritius", code: "230", iso: "MU" },
    { country: "Mayotte", code: "262", iso: "YT" },
    { country: "Mexico", code: "52", iso: "MX" },
    { country: "Micronesia", code: "691", iso: "FM" },
    { country: "Moldova", code: "373", iso: "MD" },
    { country: "Monaco", code: "377", iso: "MC" },
    { country: "Mongolia", code: "976", iso: "MN" },
    { country: "Montenegro", code: "382", iso: "ME" },
    { country: "Montserrat", code: "1-664", iso: "MS" },
    { country: "Morocco", code: "212", iso: "MA" },
    { country: "Mozambique", code: "258", iso: "MZ" },
    { country: "Myanmar", code: "95", iso: "MM" },
    { country: "Namibia", code: "264", iso: "NA" },
    { country: "Nauru", code: "674", iso: "NR" },
    { country: "Nepal", code: "977", iso: "NP" },
    { country: "Netherlands", code: "31", iso: "NL" },
    { country: "Netherlands Antilles", code: "599", iso: "AN" },
    { country: "New Caledonia", code: "687", iso: "NC" },
    { country: "New Zealand", code: "64", iso: "NZ" },
    { country: "Nicaragua", code: "505", iso: "NI" },
    { country: "Niger", code: "227", iso: "NE" },
    { country: "Nigeria", code: "234", iso: "NG" },
    { country: "Niue", code: "683", iso: "NU" },
    { country: "North Korea", code: "850", iso: "KP" },
    { country: "Northern Mariana Islands", code: "1-670", iso: "MP" },
    { country: "Norway", code: "47", iso: "NO" },
    { country: "Oman", code: "968", iso: "OM" },
    { country: "Pakistan", code: "92", iso: "PK" },
    { country: "Palau", code: "680", iso: "PW" },
    { country: "Palestine", code: "970", iso: "PS" },
    { country: "Panama", code: "507", iso: "PA" },
    { country: "Papua New Guinea", code: "675", iso: "PG" },
    { country: "Paraguay", code: "595", iso: "PY" },
    { country: "Peru", code: "51", iso: "PE" },
    { country: "Philippines", code: "63", iso: "PH" },
    { country: "Pitcairn", code: "64", iso: "PN" },
    { country: "Poland", code: "48", iso: "PL" },
    { country: "Portugal", code: "351", iso: "PT" },
    { country: "Puerto Rico", code: "1-787, 1-939", iso: "PR" },
    { country: "Qatar", code: "974", iso: "QA" },
    { country: "Republic of the Congo", code: "242", iso: "CG" },
    { country: "Reunion", code: "262", iso: "RE" },
    { country: "Romania", code: "40", iso: "RO" },
    { country: "Russia", code: "7", iso: "RU" },
    { country: "Rwanda", code: "250", iso: "RW" },
    { country: "Saint Barthelemy", code: "590", iso: "BL" },
    { country: "Saint Helena", code: "290", iso: "SH" },
    { country: "Saint Kitts and Nevis", code: "1-869", iso: "KN" },
    { country: "Saint Lucia", code: "1-758", iso: "LC" },
    { country: "Saint Martin", code: "590", iso: "MF" },
    { country: "Saint Pierre and Miquelon", code: "508", iso: "PM" },
    { country: "Saint Vincent and the Grenadines", code: "1-784", iso: "VC" },
    { country: "Samoa", code: "685", iso: "WS" },
    { country: "San Marino", code: "378", iso: "SM" },
    { country: "Sao Tome and Principe", code: "239", iso: "ST" },
    { country: "Saudi Arabia", code: "966", iso: "SA" },
    { country: "Senegal", code: "221", iso: "SN" },
    { country: "Serbia", code: "381", iso: "RS" },
    { country: "Seychelles", code: "248", iso: "SC" },
    { country: "Sierra Leone", code: "232", iso: "SL" },
    { country: "Singapore", code: "65", iso: "SG" },
    { country: "Sint Maarten", code: "1-721", iso: "SX" },
    { country: "Slovakia", code: "421", iso: "SK" },
    { country: "Slovenia", code: "386", iso: "SI" },
    { country: "Solomon Islands", code: "677", iso: "SB" },
    { country: "Somalia", code: "252", iso: "SO" },
    { country: "South Africa", code: "27", iso: "ZA" },
    { country: "South Korea", code: "82", iso: "KR" },
    { country: "South Sudan", code: "211", iso: "SS" },
    { country: "Spain", code: "34", iso: "ES" },
    { country: "Sri Lanka", code: "94", iso: "LK" },
    { country: "Sudan", code: "249", iso: "SD" },
    { country: "Suriname", code: "597", iso: "SR" },
    { country: "Svalbard and Jan Mayen", code: "47", iso: "SJ" },
    { country: "Swaziland", code: "268", iso: "SZ" },
    { country: "Sweden", code: "46", iso: "SE" },
    { country: "Switzerland", code: "41", iso: "CH" },
    { country: "Syria", code: "963", iso: "SY" },
    { country: "Taiwan", code: "886", iso: "TW" },
    { country: "Tajikistan", code: "992", iso: "TJ" },
    { country: "Tanzania", code: "255", iso: "TZ" },
    { country: "Thailand", code: "66", iso: "TH" },
    { country: "Togo", code: "228", iso: "TG" },
    { country: "Tokelau", code: "690", iso: "TK" },
    { country: "Tonga", code: "676", iso: "TO" },
    { country: "Trinidad and Tobago", code: "1-868", iso: "TT" },
    { country: "Tunisia", code: "216", iso: "TN" },
    { country: "Turkey", code: "90", iso: "TR" },
    { country: "Turkmenistan", code: "993", iso: "TM" },
    { country: "Turks and Caicos Islands", code: "1-649", iso: "TC" },
    { country: "Tuvalu", code: "688", iso: "TV" },
    { country: "U.S. Virgin Islands", code: "1-340", iso: "VI" },
    { country: "Uganda", code: "256", iso: "UG" },
    { country: "Ukraine", code: "380", iso: "UA" },
    { country: "United Arab Emirates", code: "971", iso: "AE" },
    { country: "United Kingdom", code: "44", iso: "GB" },
    { country: "United States", code: "1", iso: "US" },
    { country: "Uruguay", code: "598", iso: "UY" },
    { country: "Uzbekistan", code: "998", iso: "UZ" },
    { country: "Vanuatu", code: "678", iso: "VU" },
    { country: "Vatican", code: "379", iso: "VA" },
    { country: "Venezuela", code: "58", iso: "VE" },
    { country: "Vietnam", code: "84", iso: "VN" },
    { country: "Wallis and Futuna", code: "681", iso: "WF" },
    { country: "Western Sahara", code: "212", iso: "EH" },
    { country: "Yemen", code: "967", iso: "YE" },
    { country: "Zambia", code: "260", iso: "ZM" },
    { country: "Zimbabwe", code: "263", iso: "ZW" },
  ];

  categoryList:any[] = []
  constructor(
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerCompanyProfileService: ProviderCompanyProfileService,
    private providerMaterCountryService: ProviderMaterCountryService,
    private providerMaterStateService: ProviderMaterStateService,
    private providerMaterLocationService: ProviderMaterLocationService,
    private categoryService:ProviderCategoryService
  ) {
    this.getCategoryList()
  }

  get f() {
    return this.companyProfileForm.controls;
  }

  ngOnInit() {
    this.buildTypeForm();
    // this.onCountrySelected('countrt');
    this.addNewAdditional("");
    this.addNewMobile("");
    this.addNewLandline("");
    this.updateDataIfExist();
    this.getCountryList();
    this.serviceSubscription.push(
      this.additionalArray.valueChanges.pipe().subscribe(() => {
        this.additionalProfiles = this.additionalArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );
    this.serviceSubscription.push(
      this.mobileArray.valueChanges.pipe().subscribe(() => {
        this.mobileProfiles = this.mobileArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );
    this.serviceSubscription.push(
      this.landlineArray.valueChanges.pipe().subscribe(() => {
        this.landlineProfiles = this.landlineArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );
  }

  getCountryList() {
    this.providerMaterCountryService.getMaterCountryList().subscribe(
      (res: any) => {
        this.countries = res.data;
        console.log("country", this.countries);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onCountrySelected(e) {
    console.log("" + e.target.value);
    // this.f.regCountry?.setValue(e.target.value);
    // this.f.facCountry?.setValue(e.target.value);

    this.providerMaterStateService
      .getMaterStateListAll(e.target.value)
      .subscribe(
        (res: any) => {
          this.states = res.data[0].states;
          console.log("state", this.states);
        },
        (err) => {
          console.log(err, "not selected");
        }
      );
  }
  onStateSelected(e) {
    console.log("" + e.target.value);
    // this.f.regState.setValue(e.target.value);

    // this.f.facState.setValue(e.target.value);
    this.providerMaterLocationService
      .getMaterLocationListAll(e.target.value)
      .subscribe(
        (res: any) => {
          console.log("cities", res);
          this.cities = res.data[0].cities ? res.data[0].cities : [];
        },
        (err) => {
          console.log(err);
        }
      );
  }
  onCitySelected(e) {
    console.log("" + e.target.value);
    // this.f.regCity.setValue(e.target.value);
  }
  buildTypeForm() {
    this.companyProfileForm = this.formBuilder.group({
      company: ["", [Validators.required]],
      tanNo: ["", [Validators.required, Validators.maxLength(10)]],
      panNo: ["", [Validators.required, Validators.maxLength(10)]],
      gstNo: ["", [Validators.required, Validators.maxLength(15)]],
      codeOfIE: ["", [Validators.required, Validators.maxLength(10)]],
      estYear: ["", [Validators.required]],
      // mainCategory: ["", [Validators.required]],
      // mainProduct: ["", [Validators.required]],
      mainCategory: [[]],
      mainProduct: [[]],
      regAddress: ["", [Validators.required]],

      regCountry: ["", [Validators.required]],
      regState: ["", [Validators.required]],
      regCity: [""],
      businessCertificate: [""],
      additionalFactoryDetails: [""],
    });
  }
  addNewMobile(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      regMobile: [data.regMobile ? data.regMobile : "", [Validators.required]],
    });
    this.mobileArray.push(this.formGroup);
  }

  deleteMobile(index: number): void {
    this.mobileArray.removeAt(index);
  }
  addNewLandline(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      regLandline: [
        data.regLandline ? data.regLandline : "",
        [Validators.required, Validators.max(999), Validators.min(100)],
      ],
    });
    this.landlineArray.push(this.formGroup);
  }

  deleteLandline(index: number): void {
    this.landlineArray.removeAt(index);
  }
  addNewAdditional(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      facDivision: [data.facDivision ? data.facDivision : ""],
      facArea: [data.facArea ? data.facArea : ""],
      facUnit: [data.facUnit ? data.facUnit : ""],
      facCountry: [data.facCountry ? data.facCountry : ""],
      facState: [data.facState ? data.facState : ""],
      facAnnualTurnover: [data.facAnnualTurnover ? data.facAnnualTurnover : ""],
      facContactPerson: [data.facContactPerson ? data.facContactPerson : ""],
      facLandline: [data.facLandline ? data.facLandline : ""],
      facMobile: [data.facMobile ? data.facMobile : ""],
      facEmail: [data.facEmail ? data.facEmail : ""],
    });
    this.additionalArray.push(this.formGroup);
  }
  
  removeAdditional(index: number): void {
    this.additionalArray.removeAt(index);
  }

  updateDataIfExist() {
    // this.isLoading = true;
    this.providerCompanyProfileService
      .getCompanyProfileListByFilter(0, 1, { userId: "pending" })
      .subscribe(
        (res: any) => {
          let patchFormvalue: any = res.data[0];

          this.isDataExist = res.data.length > 0;
          if (!this.isDataExist) {
            return;
          }
          this.idIfDataExist = patchFormvalue["_id"];
          this.companyProfileForm.patchValue({
            gstNo: patchFormvalue.gstNo ? patchFormvalue.gstNo : "",
            company: patchFormvalue.company ? patchFormvalue.company : "",
            codeOfIE: patchFormvalue.codeOfIE ? patchFormvalue.codeOfIE : "",
            panNo: patchFormvalue.panNo ? patchFormvalue.panNo : "",
            estYear: patchFormvalue.estYear ? patchFormvalue.accNumber : "",
            mainCategory: patchFormvalue.mainCategory
              ? patchFormvalue.mainCategory
              : "",
            mainProduct: patchFormvalue.mainProduct
              ? patchFormvalue.mainProduct
              : "",
            tanNo: patchFormvalue.tanNo ? patchFormvalue.tanNo : "",
            regAddress: patchFormvalue.regAddress
              ? patchFormvalue.regAddress
              : "",
            regCountry: patchFormvalue.regCountry
              ? patchFormvalue.regCountry
              : "",
            regState: patchFormvalue.regState ? patchFormvalue.regState : "",
            // facLandline: [data.facLandline ? data.facLandline : ""],
            // facMobile: [data.facMobile ? data.facMobile : ""],
            regCity: patchFormvalue.regCity ? patchFormvalue.regCity : "",
            businessCertificate: patchFormvalue.businessCertificate
              ? patchFormvalue.businessCertificate
              : "",
          });
          patchFormvalue.additionalDetail.forEach((element) => {
            this.addNewAdditional(element);
          });
          patchFormvalue.additionalMobile.forEach((element) => {
            this.addNewMobile(element);
          });
          patchFormvalue.additionalLandline.forEach((element) => {
            this.addNewLandline(element);
          });
        },
        (err) => {
          this.isDataExist = false;
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  async subCompanyProfileForm() {
    if (this.companyProfileForm.invalid) {
      this.markFormGroupTouched(this.companyProfileForm);
      return;
    }
    // this.isLoading = true;
    const formData = this.companyProfileForm.value;
    let reqObj = {
      gstNo: formData.gstNo ? formData.gstNo : "",
      company: formData.company ? formData.company : "",
      codeOfIE: formData.codeOfIE ? formData.codeOfIE : "",
      panNo: formData.panNo ? formData.panNo : "",
      estYear: formData.estYear ? formData.estYear : "",
      mainCategory: formData.mainCategory ? formData.mainCategory : "",
      mainProduct: formData.mainProduct ? formData.mainProduct : "",
      tanNo: formData.tanNo ? formData.tanNo : "",
      regAddress: formData.regAddress ? formData.regAddress : "",
      regCountry: formData.regCountry ? formData.regCountry : "",
      regState: formData.regState ? formData.regState : "",
      regCity: formData.regCity ? formData.regCity : "",

      businessCertificate: formData.businessCertificate
        ? formData.businessCertificate
        : "",
      additionalDetail: [...this.additionalProfiles],
      additionalMobile: [...this.mobileProfiles],
      additionalLandline: [...this.landlineProfiles],
      additionalFactoryDetails: formData.additionalFactoryDetails
        ? formData.additionalFactoryDetails
        : "",
    };
    console.log("reqData", formData);
    console.log("reqObj", reqObj);

    if (this.isDataExist) {
      formData._id = this.idIfDataExist;
      this.providerCompanyProfileService.updateCompanyProfile(reqObj).subscribe(
        (res) => {
          this.appMessageService.createBasicNotification(
            "success",
            "Company Profile Updated Successfully"
          );
        },
        (err) => {
          this.appMessageService.createBasicNotification(
            "success",
            "Company Profile Not Updated"
          );
        }
        // () =>
        // {
        //   this.isLoading = false;
        //  }
      );
    } else {
      this.providerCompanyProfileService.addCompanyProfile(reqObj).subscribe(
        (res) => {
          this.appMessageService.createBasicNotification(
            "success",
            "Company Profile Added Successfully"
          );
        },
        (err) => {
          this.appMessageService.createBasicNotification(
            "success",
            "Company Profile Not Added"
          );
        }
        // () => {
        //   this.isLoading = false;
        //  }
      );
    }
  }

  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
  changeListener($event): void {
    this.file = $event.target.files[0];
  }

  fileUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageBase64 = reader.result;
      this.companyProfileForm.patchValue({ imageUrl: reader.result as string });
      this.fileType = file.type;
      this.fileName = file.name;
    };
  }
  additionlDetailValueYes() {
    this.addtionalDetails = true;
  }
  additionlDetailValueNo() {
    this.addtionalDetails = false;
  }

  getCategoryList(){
    this.categoryService.getCategoryListByUser().subscribe((res)=>{
      this.categoryList = res.data
    })
  }
}
