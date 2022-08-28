import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterStateService } from '../../../../core/providers/master/provider-mater-state.service';
import { ProviderMaterLocationService } from '../../../../core/providers/master/provider-mater-location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMessageService } from '../../../../core/services/app-message.service';

@Component({
  selector: 'app-page-location-edit',
  templateUrl: './page-location-edit.component.html',
  styleUrls: ['./page-location-edit.component.scss'],
})
export class PageLocationEditComponent implements OnInit {
  formType: 'location' | 'state' | 'country';
  imageList: any[] = [];
  countryId: string;
  stateId: string;
  locationId: string;
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
      this.locationId = routeParams['locationId'];
      this.stateId = routeParams['stateId'];
      this.countryId = routeParams['countryId'];

      this.getMaterCountryListByFilter(0, 1000, {});

      if (this.countryId) {
        this.sf.countryId.setValue(this.countryId);
        this.lf.countryId.setValue(this.countryId);
        this.getMaterStateListByFilter(0, 1000, { countryId: this.countryId });
        this.providerMaterCountryService.getMaterCountryById(this.countryId).subscribe(res => {
          this.countryId = res.data[0];
          this.cf._id.setValue(this.countryId['_id']);
          this.cf.image.setValue(this.countryId['image']);
          this.cf.name.setValue(this.countryId['name']);
          this.cf.title.setValue(this.countryId['title']);
          this.cf.description.setValue(this.countryId['description']);
          this.cf.keywords.setValue(this.countryId['keywords']);
          this.cf.isActivated.setValue(this.countryId['isActivated']);
        })
      }
      if (this.stateId) {
        this.lf.stateId.setValue(this.stateId);
        this.providerMaterStateService.getMaterStateById(this.stateId).subscribe(res => {
          this.stateId = res.data[0];
          this.sf._id.setValue(this.stateId['_id']);
          this.sf.image.setValue(this.stateId['image']);
          this.sf.name.setValue(this.stateId['name']);
          this.sf.title.setValue(this.stateId['title']);
          this.sf.description.setValue(this.stateId['description']);
          this.sf.keywords.setValue(this.stateId['keywords']);
          this.sf.countryId.setValue(this.stateId['countryId']);
          this.sf.isActivated.setValue(this.stateId['isActivated']);
        })
      }
      if (this.locationId) {
        this.providerMaterLocationService.getMaterLocationById(this.locationId).subscribe(res => {
          this.locationId = res.data[0];
          this.lf._id.setValue(this.locationId['_id']);
          this.lf.image.setValue(this.locationId['image']);
          this.lf.name.setValue(this.locationId['name']);
          this.lf.title.setValue(this.locationId['title']);
          this.lf.pincode.setValue(this.locationId['pincode']);
          this.lf.description.setValue(this.locationId['description']);
          this.lf.keywords.setValue(this.locationId['keywords']);
          this.lf.stateId.setValue(this.locationId['stateId']);
          this.lf.countryId.setValue(this.locationId['countryId']);
          this.lf.isActivated.setValue(this.locationId['isActivated']);
        })
      }
    })
  }

  buildLocationForm() {
    this.locationForm = this.formBuilder.group({
      _id: ['', [Validators.required]],
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
      _id: ['', [Validators.required]],
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
      _id: ['', [Validators.required]],
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

    this.providerMaterLocationService.updateMaterLocation(this.locationForm.value).subscribe(
      (res) => { this.appMessageService.createBasicNotification('success', "Location Updateed Successfully"); this.router.navigateByUrl(`/admin/location/location-list`); },
      (err) => { this.appMessageService.createBasicNotification('success', "Location Not Updateed") }
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

    this.providerMaterStateService.updateMaterState(this.stateForm.value).subscribe(
      (res) => { this.appMessageService.createBasicNotification('success', "State Updateed Successfully"); this.router.navigateByUrl(`/admin/location/location-list`); },
      (err) => { this.appMessageService.createBasicNotification('success', "State Not Updateed") }
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

    this.providerMaterCountryService.updateMaterCountry(this.countryForm.value).subscribe(
      (res) => { this.appMessageService.createBasicNotification('success', "Country Updateed Successfully"); this.router.navigateByUrl(`/admin/location/location-list`); },
      (err) => { this.appMessageService.createBasicNotification('success', "Country Not Updateed") }
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
