import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-export-capability',
  templateUrl: './form-export-capability.component.html',
  styleUrls: ['./form-export-capability.component.scss']
})
export class FormExportCapabilityComponent implements OnInit {
  companyExportCapabilityForm: FormGroup;
  yearlyTurnoverList: any[] = [];
  nearestPortList: any[] = [];
  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.companyExportCapabilityForm.controls;
  }

  ngOnInit() {
    this.buildCompanyExportCapabilityForm();
  }
  buildCompanyExportCapabilityForm() {
    this.companyExportCapabilityForm = this.formBuilder.group({
      yearlyTurnover: ["", [Validators.required]],
      exportingScience: [""],
      exportPercent: [""],
      nearestPort: ["", [Validators.required]],
      northAmerica: [""],
      westernEurope: [""],
      easternAsia: [""],
      southAmerica: [""],
      northanEurope: [""],
      africa: [""],
      centralAmerica: [""],
      southernEurope: [""],
      middileEast: [""],
      easternEurope: [""],
      southAsia: [""],
      gulf: [""],
      market: [""],

    });
  }
}
