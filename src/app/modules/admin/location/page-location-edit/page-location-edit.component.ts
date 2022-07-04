import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterStateService } from '../../../../core/providers/master/provider-mater-state.service';
import { ProviderMaterLocationService } from '../../../../core/providers/master/provider-mater-location.service';

@Component({
  selector: 'app-page-location-edit',
  templateUrl: './page-location-edit.component.html',
  styleUrls: ['./page-location-edit.component.scss'],
})
export class PageLocationEditComponent implements OnInit {
  locationForm: FormGroup;
  stateForm: FormGroup;
  countryForm: FormGroup;
  masterStateList: any[] = [];
  masterCountryList: any[] = [];
  apiStatePagination = {
    index: 0,
    length: 1000,
    query: {},
  };
  apiCountryPagination = {
    index: 0,
    length: 1000,
    query: {},
  };

  constructor(
    private formBuilder: FormBuilder,
    private providerMaterLocationService: ProviderMaterLocationService,
    private providerMaterStateService: ProviderMaterStateService,
    private providerMaterCountryService: ProviderMaterCountryService
  ) { }

  get f() {
    return this.locationForm.controls;
  }

  ngOnInit() {
    this.buildLocationForm();
    this.getMaterStateListByFilter(
      this.apiStatePagination.index,
      this.apiStatePagination.length,
      this.apiStatePagination.query
    );
    this.getMaterCountryListByFilter(
      this.apiCountryPagination.index,
      this.apiCountryPagination.length,
      this.apiCountryPagination.query
    );
  }

  buildLocationForm() {
    this.locationForm = this.formBuilder.group({
      city: ['', [Validators.required]],
      stateId: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      isActivated: [true],
    });
  }

  buildStateForm() {
    this.locationForm = this.formBuilder.group({
      state: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      isActivated: [true],
    });
  }

  buildCountryForm() {
    this.locationForm = this.formBuilder.group({
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
}
