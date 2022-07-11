import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProviderMaterCategoryService } from './../../../../core/providers/master/provider-mater-category.service';

@Component({
  selector: 'app-page-category-edit',
  templateUrl: './page-category-edit.component.html',
  styleUrls: ['./page-category-edit.component.scss'],
})
export class PageCategoryEditComponent implements OnInit {
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private providerMaterCategoryService: ProviderMaterCategoryService
  ) { }

  get f() {
    return this.categoryForm.controls;
  }

  ngOnInit() {
    this.buildCategoryForm();
    this.getMaterCategoryById(this.activatedRoute.snapshot.paramMap.get('id'))
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

  bindCategoryForm(data: any) {
    this.f.name.setValue(data.name);
    this.f.icon.setValue(data.icon);
    this.f.image.setValue(data.image);
    this.f.title.setValue(data.title);
    this.f.description.setValue(data.description);
    this.f.keywords.setValue(data.keywords);
    this.f.level.setValue(data.level);
    this.f.parentId.setValue(data.parentId);
    this.f.isActivated.setValue(data.isActivated);
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

    this.providerMaterCategoryService.updateMaterCategory(this.categoryForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.categoryForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }

  getMaterCategoryById(id) {
    this.providerMaterCategoryService
      .getMaterCategoryById(id)
      .subscribe((res) => {
        this.bindCategoryForm(res.data[0])
      });
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
