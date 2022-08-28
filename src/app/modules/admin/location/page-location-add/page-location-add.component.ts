import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterStateService } from '../../../../core/providers/master/provider-mater-state.service';
import { ProviderMaterLocationService } from '../../../../core/providers/master/provider-mater-location.service';
import { AppMessageService } from '../../../../core/services/app-message.service';

@Component({
  selector: 'app-page-location-add',
  templateUrl: './page-location-add.component.html',
  styleUrls: ['./page-location-add.component.scss'],
})
export class PageLocationAddComponent implements OnInit {
  formType: 'location' | 'state' | 'country';
  imageList: any[] = [];
  countryId: string;
  stateId: string;
  countryForm: FormGroup;
  stateForm: FormGroup;
  locationForm: FormGroup;
  masterCountryList: any[] = [];
  masterStateList: any[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private appMessageService: AppMessageService,
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
    this.setConfig();
  }

  setConfig() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.formType = routeParams['type'];
      this.stateId = routeParams['stateId'];
      this.countryId = routeParams['countryId'];

      this.getMaterCountryListByFilter(0, 1000, {});
      if (this.formType !== 'country' && this.countryId) {
        this.sf.countryId.setValue(this.countryId);
        this.lf.countryId.setValue(this.countryId);
        this.getMaterStateListByFilter(0, 1000, { countryId: this.countryId });
        if (this.formType === 'location' && this.stateId) {
          this.lf.stateId.setValue(this.stateId);
        }
      }
    })
  }

  buildLocationForm() {
    this.locationForm = this.formBuilder.group({
      image: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      pincode: ['', [Validators.minLength(6), Validators.maxLength(6)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      keywords: [[]],
      stateId: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      isActivated: [true],
    });
  }

  buildStateForm() {
    this.stateForm = this.formBuilder.group({
      image: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      keywords: [[]],
      countryId: ['', [Validators.required]],
      isActivated: [true],
    });
  }

  buildCountryForm() {
    this.countryForm = this.formBuilder.group({
      image: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      keywords: [[]],
      isActivated: [true],
    });
  }

  async subLocationForm() {
    if (this.imageList.length > 0) {
      this.lf.image.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    if (this.lf.stateId.value['_id'] !== undefined) {
      this.lf.stateId.setValue(this.lf.stateId.value._id);
    }
    if (this.lf.countryId.value['_id'] !== undefined) {
      this.lf.countryId.setValue(this.lf.countryId.value._id);
    }
    if (this.locationForm.invalid) {
      this.markFormGroupTouched(this.locationForm);
      return;
    }

    this.providerMaterLocationService.addMaterLocation(this.locationForm.value).subscribe(
      (res) => { this.appMessageService.createBasicNotification('success', "Location Added Successfully"); this.router.navigateByUrl(`/admin/location/location-list`); },
      (err) => { this.appMessageService.createBasicNotification('success', "Location Not Added") }
    );
  }

  async subStateForm() {
    if (this.imageList.length > 0) {
      this.sf.image.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    if (this.sf.countryId.value['_id'] !== undefined) {
      this.sf.countryId.setValue(this.sf.countryId.value._id);
    }
    if (this.stateForm.invalid) {
      this.markFormGroupTouched(this.stateForm);
      return;
    }

    this.providerMaterStateService.addMaterState(this.stateForm.value).subscribe(
      (res) => { this.appMessageService.createBasicNotification('success', "State Added Successfully"); this.router.navigateByUrl(`/admin/location/location-list`); },
      (err) => { this.appMessageService.createBasicNotification('success', "State Not Added") }
    );
  }

  async subCountryForm() {
    if (this.imageList.length > 0) {
      this.cf.image.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    if (this.countryForm.invalid) {
      this.markFormGroupTouched(this.countryForm);
      return;
    }

    this.providerMaterCountryService.addMaterCountry(this.countryForm.value).subscribe(
      (res) => { this.appMessageService.createBasicNotification('success', "Country Added Successfully"); this.router.navigateByUrl(`/admin/location/location-list`); },
      (err) => { this.appMessageService.createBasicNotification('success', "Country Not Added") }
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
}
