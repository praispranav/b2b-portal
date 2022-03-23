import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';
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
      division: new FormControl('', Validators.required),

      factory: new FormControl('', Validators.required),

      annualTurn: new FormControl('', Validators.required),
      contPerson: new FormControl('', Validators.required),
      phn: new FormControl('', Validators.required),
      mob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mainCat: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
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
  get division() { return this.companyProfileForm.get('division'); }
  get area() { return this.companyProfileForm.get('area'); }

  get factory() { return this.companyProfileForm.get('factory'); }

  get annualTurn() { return this.companyProfileForm.get('annualTurn'); }
  get contPerson() { return this.companyProfileForm.get('contPerson'); }
  get phn() { return this.companyProfileForm.get('phn'); }
  get mob() { return this.companyProfileForm.get('mob'); }
  get email() { return this.companyProfileForm.get('email'); }

  // Ouality-Control Validation
  qualityControlForm = new FormGroup(
    {
      processName: new FormControl(''),
      picture: new FormControl(''),
      qualitydescription: new FormControl(''),
    })
  get processName() { return this.qualityControlForm.get('processName'); }
  get picture() { return this.qualityControlForm.get('picture'); }
  get qualitydescription() { return this.qualityControlForm.get('qualitydescription'); }

  // R&D validation

  randdForm = new FormGroup(
    {
      certificateName: new FormControl(''),
      certifiedBy: new FormControl(''),
      businessScope: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
    })
  get certificateName() { return this.randdForm.get('certificateName'); }
  get certifiedBy() { return this.randdForm.get('certifiedBy'); }
  get businessScope() { return this.randdForm.get('businessScope'); }
  get fromDate() { return this.randdForm.get('fromDate'); }
  get toDate() { return this.randdForm.get('toDate'); }


  constructor() {

  }

  ngOnInit(): void {
  }
  submitCompanyProfileForm() {
    console.log(this.companyProfileForm.value)
  }
  submitqualityControlForm() {
    console.log(this.qualityControlForm.value)
  }
  submitranddForm() {
    console.log(this.randdForm.value)
  }

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
