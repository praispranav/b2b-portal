import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-export-capability',
  templateUrl: './form-export-capability.component.html',
  styleUrls: ['./form-export-capability.component.scss']
})
export class FormExportCapabilityComponent implements OnInit {
  companyExportCapabilityForm: FormGroup;
  yearlyTurnoverList: any[] = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "tom", label: "Tom" },
  ];
  nearestPortList: any[] = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "tom", label: "Tom" },
  ];
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
      exportingScience: ["", [Validators.required]],
      exportPercent: ["", [Validators.required]],
      nearestPort: ["", [Validators.required]],
      northAmerica: ["", [Validators.required]],
      westernEurope: ["", [Validators.required]],
      easternAsia: ["", [Validators.required]],
      southAmerica: ["", [Validators.required]],
      northanEurope: ["", [Validators.required]],
      africa: ["", [Validators.required]],
      centralAmerica: ["", [Validators.required]],
      southernEurope: ["", [Validators.required]],
      middileEast: ["", [Validators.required]],
      easternEurope: ["", [Validators.required]],
      southAsia: ["", [Validators.required]],
      gulf: ["", [Validators.required]],
      market: ["", [Validators.required]],

    });
  }
}
