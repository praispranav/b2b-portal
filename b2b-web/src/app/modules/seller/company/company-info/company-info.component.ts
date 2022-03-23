import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;
  @ViewChild('first') first: TabDirective;
  @ViewChild('second') second: TabDirective;
  constructor(private formBuilder: FormBuilder) { }

  //Export Capabilities Validation
  exportCapabilitiesForm = this.formBuilder.group({
    yearlyTurnOver: ['', Validators.required],
    nearestPort: ['', Validators.required],

  });

  get yearlyTurnOver() { return this.exportCapabilitiesForm.get('yearlyTurnOver'); }
  get nearestPort() { return this.exportCapabilitiesForm.get('nearestPort'); }

  exportSubmit() {
    console.log(this.exportCapabilitiesForm.value);
  }

  // company profile validation
  companyProfileForm = new FormGroup(
    {
      companyName: new FormControl('', Validators.required),
      pan: new FormControl('', Validators.required),
      tan: new FormControl('', Validators.required),
      gst: new FormControl('', Validators.required),
      iec: new FormControl('', Validators.required),
      estDate: new FormControl('', Validators.required),
      mainCategory: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      addr: new FormControl('', Validators.required),
      branch: new FormControl('', Validators.required),
      network: new FormControl('', Validators.required),
      factory: new FormControl('', Validators.required),
      internalOffice: new FormControl('', Validators.required),
      menufacturing: new FormControl('', Validators.required),
      showroom: new FormControl('', Validators.required),
      trandingDiv: new FormControl('', Validators.required),
      wharehouse: new FormControl('', Validators.required),
      sisterCon: new FormControl('', Validators.required),
      sqareMeter: new FormControl('', Validators.required),
      squareFeet: new FormControl('', Validators.required),
      squareYard: new FormControl('', Validators.required),
      hectare: new FormControl('', Validators.required),
      acre: new FormControl('', Validators.required),
      addcountry: new FormControl('', Validators.required),
      addstate: new FormControl('', Validators.required),
      annualTurn: new FormControl('', Validators.required),
      contPerson: new FormControl('', Validators.required),
      phn: new FormControl('', Validators.required),
      mob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mainCat: new FormControl('', Validators.required),



    }
  )
  get companyName() { return this.companyProfileForm.get('companyName'); }
  get pan() { return this.companyProfileForm.get('pan'); }
  get tan() { return this.companyProfileForm.get('tan'); }
  get gst() { return this.companyProfileForm.get('gst'); }
  get iec() { return this.companyProfileForm.get('iec'); }
  get estDate() { return this.companyProfileForm.get('estDate'); }
  get mainCat() { return this.companyProfileForm.get('mainCat'); }
  get mainCategory() { return this.companyProfileForm.get('mainCategory'); }
  get country() { return this.companyProfileForm.get('country'); }
  get state() { return this.companyProfileForm.get('state'); }
  get city() { return this.companyProfileForm.get('city'); }
  get addr() { return this.companyProfileForm.get('addr'); }
  get branch() { return this.companyProfileForm.get('branch'); }
  get network() { return this.companyProfileForm.get('network'); }
  get factory() { return this.companyProfileForm.get('factory'); }
  get internalOffice() { return this.companyProfileForm.get('internalOffice'); }
  get menufacturing() { return this.companyProfileForm.get('menufacturing'); }
  get showroom() { return this.companyProfileForm.get('showroom'); }
  get trandingDiv() { return this.companyProfileForm.get('trandingDiv'); }
  get wharehouse() { return this.companyProfileForm.get('wharehouse'); }
  get sisterCon() { return this.companyProfileForm.get('sisterCon'); }
  get sqareMeter() { return this.companyProfileForm.get('sqareMeter'); }
  get squareFeet() { return this.companyProfileForm.get('squareFeet'); }
  get squareYard() { return this.companyProfileForm.get('squareYard'); }
  get acre() { return this.companyProfileForm.get('acre'); }
  get hectare() { return this.companyProfileForm.get('hectare'); }
  get annualTurn() { return this.companyProfileForm.get('annualTurn'); }
  get contPerson() { return this.companyProfileForm.get('contPerson'); }
  get phn() { return this.companyProfileForm.get('phn'); }
  get mob() { return this.companyProfileForm.get('mob'); }
  get email() { return this.companyProfileForm.get('email'); }
  get addstate() { return this.companyProfileForm.get('addstate'); }
  get addcountry() { return this.companyProfileForm.get('addcountry'); }


  ngOnInit(): void {
  }
  //company details validation
  companyDetailsForm = new FormGroup({
    contactPerson: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    companyWebsite: new FormControl('', Validators.required),
    companyPage: new FormControl('', Validators.required),
    emailDetails: new FormControl('', [Validators.required, Validators.email]),
    alternativeEmail: new FormControl('', [Validators.required, Validators.email]),
    companyNameDetails: new FormControl('', Validators.required),
    accountNumber: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
    ifscCode: new FormControl('', Validators.required),
    swiftCode: new FormControl('', Validators.required),
    bankName: new FormControl('', Validators.required),
    branchDetails: new FormControl('', Validators.required),
    companyPhilosophy: new FormControl('', Validators.required),
    companyMissionAndVision: new FormControl('', Validators.required),
    companyDetailedInstruction: new FormControl('', Validators.required),
    selectTradeShow: new FormControl('', Validators.required),
    tradeShowName: new FormControl('', Validators.required),
    dateFrom: new FormControl('', Validators.required),
    dateTo: new FormControl('', Validators.required),
    host: new FormControl('', Validators.required),
    countryDetails: new FormControl('', Validators.required),
    cityDetails: new FormControl('', Validators.required),
    aboutTradeShow: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    employeeStrength: new FormControl('', Validators.required),
  })

  get contactPerson() { return this.companyDetailsForm.get('contactPerson'); }
  get name() { return this.companyDetailsForm.get('name'); }
  get surname() { return this.companyDetailsForm.get('surname'); }
  get companyWebsite() { return this.companyDetailsForm.get('companyWebsite'); }
  get companyPage() { return this.companyDetailsForm.get('companyPage'); }
  get emailDetails() { return this.companyDetailsForm.get('emailDetails'); }
  get alternativeEmail() { return this.companyDetailsForm.get('alternativeEmail'); }
  get companyNameDetails() { return this.companyDetailsForm.get('companyNameDetails'); }
  get accountNumber() { return this.companyDetailsForm.get('accountNumber'); }
  get accountType() { return this.companyDetailsForm.get('accountType'); }
  get ifscCode() { return this.companyDetailsForm.get('ifscCode'); }
  get swiftCode() { return this.companyDetailsForm.get('swiftCode'); }
  get bankName() { return this.companyDetailsForm.get('bankName'); }
  get branchDetails() { return this.companyDetailsForm.get('branchDetails'); }
  get companyPhilosophy() { return this.companyDetailsForm.get('companyPhilosophy'); }
  get companyMissionAndVision() { return this.companyDetailsForm.get('companyMissionAndVision'); }
  get companyDetailedInstruction() { return this.companyDetailsForm.get('companyDetailedInstruction'); }
  get selectTradeShow() { return this.companyDetailsForm.get('selectTradeShow'); }
  get tradeShowName() { return this.companyDetailsForm.get('tradeShowName'); }
  get dateFrom() { return this.companyDetailsForm.get('dateFrom'); }
  get dateTo() { return this.companyDetailsForm.get('dateTo'); }
  get host() { return this.companyDetailsForm.get('host'); }
  get countryDetails() { return this.companyDetailsForm.get('countryDetails'); }
  get cityDetails() { return this.companyDetailsForm.get('cityDetails'); }
  get aboutTradeShow() { return this.companyDetailsForm.get('aboutTradeShow'); }
  get designation() { return this.companyDetailsForm.get('designation'); }
  get employeeStrength() { return this.companyDetailsForm.get('employeeStrength'); }


  detailsSubmitForm() {
    console.log(this.companyDetailsForm.value);
  }

  //Certificate Centre Dynamic Data

  Data: Array<any> = [
    { name: 'ISO', value: 'ISO' },
    { name: 'BSCI', value: 'BSCI' },
    { name: 'SA8000', value: 'SA8000' },
    { name: 'Apple', value: 'apple' },
    { name: 'WCA', value: 'WCA' },
    { name: 'WRAP', value: 'WRAP' },
    { name: 'CE', value: 'CE' },
    { name: 'GRS', value: 'GRS' },
    { name: 'ROHS', value: 'ROHS' },
    { name: 'FCC', value: 'FCC' },
    { name: 'EMC', value: 'EMC' },
    { name: 'TUV MARK', value: 'TUV MARK' },
    { name: 'UL', value: 'UL' },
    { name: 'UKCA', value: 'UKCA' },
    { name: 'GOTS', value: 'GOTS' },
    { name: 'CPC', value: 'CPC' }

  ];



  confirmTabSwitch($event) {
    if (this.disableSwitching) {
      const confirm = window.confirm('Discard changes and switch tab?');
      if (confirm) {
        this.disableSwitching = false;
        this.second.active = true;
      }
    }
  }
}
