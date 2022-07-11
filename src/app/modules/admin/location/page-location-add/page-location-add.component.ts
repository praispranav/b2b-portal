import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterStateService } from '../../../../core/providers/master/provider-mater-state.service';
import { ProviderMaterLocationService } from '../../../../core/providers/master/provider-mater-location.service';

@Component({
  selector: 'app-page-location-add',
  templateUrl: './page-location-add.component.html',
  styleUrls: ['./page-location-add.component.scss'],
})
export class PageLocationAddComponent implements OnInit {
  locationForm: FormGroup;
  stateForm: FormGroup;
  countryForm: FormGroup;
  masterStateList: any[] = [];
  masterCountryList: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private providerMaterLocationService: ProviderMaterLocationService,
    private providerMaterStateService: ProviderMaterStateService,
    private providerMaterCountryService: ProviderMaterCountryService
  ) { }

  get lf() {
    return this.locationForm.controls;
  }
  get sf() {
    return this.stateForm.controls;
  }
  get cf() {
    return this.countryForm.controls;
  }

  ngOnInit() {
    this.buildLocationForm();
    this.buildStateForm();
    this.buildCountryForm();
    this.getMaterCountryListByFilter(0, 1000, {});
  }

  buildLocationForm() {
    this.locationForm = this.formBuilder.group({
      city: ['', [Validators.required]],
      stateId: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      pincode: [''],
      isActivated: [true],
    });
  }

  buildStateForm() {
    this.stateForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      isActivated: [true],
    });
  }

  buildCountryForm() {
    this.countryForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      isActivated: [true],
    });
  }

  async subLocationForm() {
    if (this.locationForm.invalid) {
      this.markFormGroupTouched(this.locationForm);
      return;
    }

    this.providerMaterLocationService.addMaterLocation(this.locationForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.locationForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }

  async subStateForm() {
    if (this.stateForm.invalid) {
      this.markFormGroupTouched(this.stateForm);
      return;
    }

    this.providerMaterStateService.addMaterState(this.stateForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.stateForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }

  async subCountryForm() {
    if (this.countryForm.invalid) {
      this.markFormGroupTouched(this.countryForm);
      return;
    }

    this.providerMaterCountryService.addMaterCountry(this.countryForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.countryForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }

  getMaterStateListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterStateService
      .getMaterStateListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterStateList = res.data;
      });
  }

  getMaterCountryListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterCountryService
      .getMaterCountryListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterCountryList = res.data;
      });
  }

  async toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  private resetFormGroup(form: FormGroup) {
    form.reset();
  }

  lfCountryChange(e) {
    this.getMaterStateListByFilter(0, 1000, { countryId: e._id })
  }
}
