import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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

  ngOnInit(): void {
  }
  //company details validation
  companyDetailsForm = new FormGroup({
    contactPerson: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    companyWebsite: new FormControl('', Validators.required),
    companyPage: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    alternativeEmail: new FormControl('', [Validators.required, Validators.email]),
    googleBusinessUrl: new FormControl('', Validators.required),
    instagramBusinessUrl: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    facebookBusinessPage: new FormControl('', Validators.required),
    accountNumber: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
    ifscCode: new FormControl('', Validators.required),
    swiftCode: new FormControl('', Validators.required),
    bankName: new FormControl('', Validators.required),
    branch: new FormControl('', Validators.required),
    companyPhilosophy: new FormControl('', Validators.required),
    companyMissionAndVision: new FormControl('', Validators.required),
    companyDetailedInstruction: new FormControl('', Validators.required),
    selectTradeShow: new FormControl('', Validators.required),
    tradeShowName: new FormControl('', Validators.required),
    dateFrom: new FormControl('', Validators.required),
    dateTo: new FormControl('', Validators.required),
    host: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    aboutTradeShow: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    employeeStrength: new FormControl('', Validators.required),
  })

  get contactPerson() { return this.companyDetailsForm.get('contactPerson'); }
  get name() { return this.companyDetailsForm.get('name'); }
  get surname() { return this.companyDetailsForm.get('surname'); }
  get companyWebsite() { return this.companyDetailsForm.get('companyWebsite'); }
  get companyPage() { return this.companyDetailsForm.get('companyPage'); }
  get email() { return this.companyDetailsForm.get('email'); }
  get alternativeEmail() { return this.companyDetailsForm.get('alternativeEmail'); }
  get googleBusinessUrl() { return this.companyDetailsForm.get('googleBusinessUrl'); }
  get instagramBusinessUrl() { return this.companyDetailsForm.get('instagramBusinessUrl'); }
  get companyName() { return this.companyDetailsForm.get('companyName'); }
  get facebookBusinessPage() { return this.companyDetailsForm.get('facebookBusinessPage'); }
  get accountNumber() { return this.companyDetailsForm.get('accountNumber'); }
  get accountType() { return this.companyDetailsForm.get('accountType'); }
  get ifscCode() { return this.companyDetailsForm.get('ifscCode'); }
  get swiftCode() { return this.companyDetailsForm.get('swiftCode'); }
  get bankName() { return this.companyDetailsForm.get('bankName'); }
  get branch() { return this.companyDetailsForm.get('branch'); }
  get companyPhilosophy() { return this.companyDetailsForm.get('companyPhilosophy'); }
  get companyMissionAndVision() { return this.companyDetailsForm.get('companyMissionAndVision'); }
  get companyDetailedInstruction() { return this.companyDetailsForm.get('companyDetailedInstruction'); }
  get selectTradeShow() { return this.companyDetailsForm.get('selectTradeShow'); }
  get tradeShowName() { return this.companyDetailsForm.get('tradeShowName'); }
  get dateFrom() { return this.companyDetailsForm.get('dateFrom'); }
  get dateTo() { return this.companyDetailsForm.get('dateTo'); }
  get host() { return this.companyDetailsForm.get('host'); }
  get country() { return this.companyDetailsForm.get('country'); }
  get city() { return this.companyDetailsForm.get('city'); }
  get aboutTradeShow() { return this.companyDetailsForm.get('aboutTradeShow'); }
  get designation() { return this.companyDetailsForm.get('designation'); }
  get employeeStrength() { return this.companyDetailsForm.get('employeeStrength'); }

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
