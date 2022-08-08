import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterStateService } from '../../../../core/providers/master/provider-mater-state.service';
import { ProviderMaterLocationService } from '../../../../core/providers/master/provider-mater-location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-location-edit',
  templateUrl: './page-location-edit.component.html',
  styleUrls: ['./page-location-edit.component.scss'],
})
export class PageLocationEditComponent implements OnInit {
  country: string;
  state: string;
  location: string;
  locationForm: FormGroup;
  stateForm: FormGroup;
  countryForm: FormGroup;
  masterStateList: any[] = [];
  masterCountryList: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
    this.country = this.activatedRoute.snapshot.params['country'];
    this.state = this.activatedRoute.snapshot.params['state'];
    this.location = this.activatedRoute.snapshot.params['location'];
    if (this.country) {
      this.getMaterStateListByFilter(0, 1000, { countryId: this.country });
      this.providerMaterCountryService.getMaterCountryById(this.country).subscribe(res => {
        this.country = res.data[0];
        this.cf._id.setValue(this.country['_id']);
        this.cf.country.setValue(this.country['country']);
        this.cf.isActivated.setValue(this.country['isActivated']);
        this.sf.countryId.setValue(this.country['_id']);
        this.lf.countryId.setValue(this.country['_id']);
      }, err => {
        this.router.navigateByUrl(`/admin/location/location-list`);
      });
    }
    if (this.state) {
      this.providerMaterStateService.getMaterStateById(this.state).subscribe(res => {
        this.state = res.data[0];
        this.sf._id.setValue(this.state['_id']);
        this.sf.state.setValue(this.state['state']);
        this.sf.isActivated.setValue(this.state['isActivated']);
        this.lf.stateId.setValue(this.state['_id']);
      }, err => {
        this.router.navigateByUrl(`/admin/location/location-list`);
      });
    }
    if (this.location) {
      this.providerMaterLocationService.getMaterLocationById(this.location).subscribe(res => {
        this.location = res.data[0];
        this.lf._id.setValue(this.location['_id']);
        this.lf.city.setValue(this.location['city']);
        this.lf.pincode.setValue(this.location['pincode']);
        this.lf.isActivated.setValue(this.location['isActivated']);
      }, err => {
        this.router.navigateByUrl(`/admin/location/location-list`);
      });
    }
    if (!this.country && !this.state && !this.location) {
      this.router.navigateByUrl(`/admin/location/location-list`);
    }
  }

  buildLocationForm() {
    this.locationForm = this.formBuilder.group({
      _id: ['', [Validators.required]],
      city: ['', [Validators.required]],
      stateId: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      pincode: [''],
      isActivated: [true],
    });
  }

  buildStateForm() {
    this.stateForm = this.formBuilder.group({
      _id: ['', [Validators.required]],
      state: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      isActivated: [true],
    });
  }

  buildCountryForm() {
    this.countryForm = this.formBuilder.group({
      _id: ['', [Validators.required]],
      country: ['', [Validators.required]],
      isActivated: [true],
    });
  }

  async subLocationForm() {
    if (this.locationForm.invalid) {
      this.markFormGroupTouched(this.locationForm);
      return;
    }

    this.providerMaterLocationService.updateMaterLocation(this.locationForm.value).subscribe(
      (res) => {
        window.alert('API Success');
        this.router.navigateByUrl(`/admin/location/location-list`);
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

    this.providerMaterStateService.updateMaterState(this.stateForm.value).subscribe(
      (res) => {
        window.alert('API Success');
        this.router.navigateByUrl(`/admin/location/location-list`);
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

    this.providerMaterCountryService.updateMaterCountry(this.countryForm.value).subscribe(
      (res) => {
        window.alert('API Success');
        this.router.navigateByUrl(`/admin/location/location-list`);
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

  lfCountryChange(e) {
    this.lf.stateId.reset()
    if (e) {
      this.getMaterStateListByFilter(0, 1000, { countryId: e._id })
    }
  }
}
