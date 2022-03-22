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

  constructor() { }

  ngOnInit(): void {
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
