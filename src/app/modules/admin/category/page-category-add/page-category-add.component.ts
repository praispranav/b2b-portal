import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../../@pages/components/message/message.service';
import { ProviderMaterCategoryService } from './../../../../core/providers/master/provider-mater-category.service';

@Component({
  selector: 'app-page-category-add',
  templateUrl: './page-category-add.component.html',
  styleUrls: ['./page-category-add.component.scss'],
})
export class PageCategoryAddComponent implements OnInit {
  categoryForm: FormGroup;
  masterCategoryList: any[] = [];
  iconList: any[] = [];
  imageList: any[] = [];
  keywordsList: string[] = [];
  apiPagination = {
    index: 0,
    length: 1000,
    query: {},
  };
  heading: string;
  description: string;
  currentTab: number = 0;
  notificationModel: any = {
    type: 'flip',
    message: 'Api success',
    color: 'success',
    position: 'top',
    current: 0
  };
  notificationModel1: any = {
    type: 'flip',
    message: 'Api Error',
    color: 'danger',
    position: 'top',
    current: 0
  };
  nofitcationStrings: any = [
    {
      heading: 'Simple Alert',
      desc: 'Awesome Loading Circle Animation',
      position: 'top',
      type: 'flip'
    }
  ];
  colors = [
    { value: 'info', label: 'Info' },
    { value: 'warning', label: 'Warning' },
    { value: 'success', label: 'Success' },
    { value: 'danger', label: 'Danger' },
    { value: 'default', label: 'Default' }
  ];
  selectedColor;
  selectedColor1;
  constructor(
    private formBuilder: FormBuilder,
    private providerMaterCategoryService: ProviderMaterCategoryService,
    private _notification: MessageService,

  ) {
    this.selectedColor = this.colors[2]['value'];
    this.selectedColor1 = this.colors[3]['value'];
    this.heading = this.nofitcationStrings[0].heading;
    this.description = this.nofitcationStrings[0].desc;
  }
  get f() {
    return this.categoryForm.controls;
  }
  ngOnInit() {
    this.buildCategoryForm();
    this.getMaterCategoryListByFilter(
      this.apiPagination.index,
      this.apiPagination.length,
      this.apiPagination.query
    );
  }
  buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
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
  async subCategoryForm() {
    if (this.iconList.length > 0) {
      this.f.icon.setValue(await this.toBase64(this.iconList[0].originFileObj));
    }
    if (this.imageList.length > 0) {
      this.f.image.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    if (this.categoryForm.invalid) {
      this.markFormGroupTouched(this.categoryForm);
      return;
    }
    if (this.f.parentId.value['_id'] !== undefined) {
      this.f.level.setValue(Number(this.f.parentId.value.level) + 1);
      this.f.parentId.setValue(this.f.parentId.value._id);
    }
    this.providerMaterCategoryService.addMaterCategory(this.categoryForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.categoryForm);
        if (this.notificationModel.current != this.currentTab) {
          this.notificationModel.current = this.currentTab;
          this._notification.remove();
        }
        this.notificationModel.position = this.nofitcationStrings[this.currentTab]['position'];
        this.notificationModel.type = this.nofitcationStrings[this.currentTab]['type'];
        this.notificationModel.color = this.selectedColor;
        this._notification.create(this.notificationModel.color, this.notificationModel.message, {
          Position: this.nofitcationStrings[this.currentTab]['position'],
          Style: this.notificationModel.type,
          Duration: 0
        });
      },
      (err) => {
        if (this.notificationModel1.current != this.currentTab) {
          this.notificationModel1.current = this.currentTab;
          this._notification.remove();
        }
        this.notificationModel1.position = this.nofitcationStrings[this.currentTab]['position'];
        this.notificationModel1.type = this.nofitcationStrings[this.currentTab]['type'];
        this.notificationModel1.color = this.selectedColor1;
        this._notification.create(this.notificationModel1.color, this.notificationModel1.message, {
          Position: this.nofitcationStrings[this.currentTab]['position'],
          Style: this.notificationModel1.type,
          Duration: 0
        });
      }
    );
  }
  getMaterCategoryListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterCategoryService
      .getMaterCategoryListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterCategoryList = res.data;
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

