import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from '../../../../../../core/services/app-message.service';
import { ProviderExportCapabilityService } from './../../../../../../core/providers/user/provider-export-capability.service';

@Component({
  selector: "app-form-export-capability",
  templateUrl: "./form-export-capability.component.html",
  styleUrls: ["./form-export-capability.component.scss"],
})
export class FormExportCapabilityComponent implements OnInit {
  isLoading = true;
  isDataExist: boolean;
  idIfDataExist: string;
  exportCapabilityForm: FormGroup;
  turnOverOptions = [
    { value: 'Below $1 Million', label: 'Below $1 Million' },
    { value: '$1 Million - $2.5 Million', label: '$1 Million - $2.5 Million' },
    { value: '$2.5 Million - $5 Million', label: '$2.5 Million - $5 Million' },
    { value: '$5 Million - $10 Million', label: '$5 Million - $10 Million' },
    { value: '$10 Million - $50 Million', label: '$10 Million - $50 Million' },
    { value: 'US$50 Million - $100 Million', label: 'US$50 Million - $100 Million' },
    { value: 'Above $100 Million', label: 'Above $100 Million' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];
  yearlyTurnOver;
  constructor(
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerExportCapabilityService: ProviderExportCapabilityService
  ) { }

  get f() {
    return this.exportCapabilityForm.controls;
  }

  ngOnInit() {
    this.buildTypeForm();
    this.updateDataIfExist();
  }

  buildTypeForm() {
    this.exportCapabilityForm = this.formBuilder.group({
      yearlyTurnover: ["", [Validators.required]],
      nearestPort: ["", [Validators.required]],
      exportingScience: [""],
      exportingPercent: ["",[Validators.max(100)]],
      northAmerica: ["",[Validators.max(100)]],
      westernEurope: ["",[Validators.max(100)]],
      easternAsia: ["",[Validators.max(100)]],
      southAmerica: ["",[Validators.max(100)]],
      northanEurope: ["",[Validators.max(100)]],
      africa: ["",[Validators.max(100)]],
      centralAmerica: ["",[Validators.max(100)]],
      southernEurope: ["",[Validators.max(100)]],
      middileEast: ["",[Validators.max(100)]],
      easternEurope: ["",[Validators.max(100)]],
      southAsia: ["",[Validators.max(100)]],
      gulf: ["",[Validators.max(100)]],
      domasticMarket: ["",[Validators.max(100)]],
    });
  }

  updateDataIfExist() {
    this.isLoading = true;
    this.providerExportCapabilityService.getExportCapabilityListByFilter(0, 1, { userId: 'pending' }).subscribe(
      (res: any) => {
        this.isDataExist = res.data.length > 0;
        if (!this.isDataExist) {
          return;
        }
        this.idIfDataExist = res.data[0]['_id'];
        this.f.yearlyTurnover.setValue(res.data[0].yearlyTurnover);
        this.f.nearestPort.setValue(res.data[0].nearestPort);
        this.f.exportingScience.setValue(res.data[0].exportingScience);
        this.f.exportingPercent.setValue(res.data[0].exportingPercent);
        this.f.northAmerica.setValue(res.data[0].northAmerica);
        this.f.westernEurope.setValue(res.data[0].westernEurope);
        this.f.easternAsia.setValue(res.data[0].easternAsia);
        this.f.southAmerica.setValue(res.data[0].southAmerica);
        this.f.northanEurope.setValue(res.data[0].northanEurope);
        this.f.africa.setValue(res.data[0].africa);
        this.f.centralAmerica.setValue(res.data[0].centralAmerica);
        this.f.southernEurope.setValue(res.data[0].southernEurope);
        this.f.middileEast.setValue(res.data[0].middileEast);
        this.f.easternEurope.setValue(res.data[0].easternEurope);
        this.f.southAsia.setValue(res.data[0].southAsia);
        this.f.gulf.setValue(res.data[0].gulf);
        this.f.domasticMarket.setValue(res.data[0].domasticMarket);
      },
      (err) => { this.isDataExist = false; },
      () => { this.isLoading = false; }
    );
  }

  async subExportCapabilityForm() {
    if (this.exportCapabilityForm.invalid) {
      this.markFormGroupTouched(this.exportCapabilityForm);
      return;
    }
    this.isLoading = true;
    const formValue = this.exportCapabilityForm.value;
    
    debugger;

    if (this.isDataExist) {
      formValue._id = this.idIfDataExist;
      this.providerExportCapabilityService.updateExportCapability(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Export Capability Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Export Capability Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerExportCapabilityService.addExportCapability(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Export Capability Added Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Export Capability Not Added") },
        () => { this.isLoading = false; }
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
}
