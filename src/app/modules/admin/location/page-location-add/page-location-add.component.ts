import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderMaterLocationService } from './../../../../core/providers/master/provider-mater-location.service';

@Component({
  selector: 'app-page-location-add',
  templateUrl: './page-location-add.component.html',
  styleUrls: ['./page-location-add.component.scss'],
})
export class PageLocationAddComponent implements OnInit {
  locationForm: FormGroup;
  masterLocationList: any[] = [];
  iconList: any[] = [];
  imageList: any[] = [];
  keywordsList: string[] = [];
  apiPagination = {
    index: 0,
    length: 10,
    query: {},
  };

  constructor(
    private formBuilder: FormBuilder,
    private providerMaterLocationService: ProviderMaterLocationService
  ) { }

  get f() {
    return this.locationForm.controls;
  }

  ngOnInit() {
    this.buildLocationForm();
    this.getMaterLocationListByFilter(
      this.apiPagination.index,
      this.apiPagination.length,
      this.apiPagination.query
    );
  }

  buildLocationForm() {
    this.locationForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(165),
        ],
      ],
      icon: [''],
      image: ['', [Validators.required]],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(165),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(165),
        ],
      ],
      keywords: [[]],
      level: [0],
      parentId: [''],
      isActivated: [true],
    });
  }

  async subLocationForm() {
    if (this.iconList.length > 0) {
      this.f.icon.setValue(await this.toBase64(this.iconList[0].originFileObj));
    }
    if (this.imageList.length > 0) {
      this.f.image.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    if (this.locationForm.invalid) {
      this.markFormGroupTouched(this.locationForm);
      return;
    }
    if (this.f.parentId.value['_id'] !== undefined) {
      this.f.level.setValue(Number(this.f.parentId.value.level) + 1);
      this.f.parentId.setValue(this.f.parentId.value._id);
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

  getMaterLocationListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterLocationService
      .getMaterLocationListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterLocationList = res.data;
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
    this.iconList = [];
    this.imageList = [];
    this.keywordsList = [];
  }
}
