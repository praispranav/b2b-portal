import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderMaterFilterService } from '../../../../core/providers/master/provider-mater-filter.service';
import { ProviderMaterCategoryService } from './../../../../core/providers/master/provider-mater-category.service';
import { AppMessageService } from '../../../../core/services/app-message.service';


@Component({
  selector: 'app-page-category-add',
  templateUrl: './page-category-add.component.html',
  styleUrls: ['./page-category-add.component.scss'],
})
export class PageCategoryAddComponent implements OnInit {
  parentId: any;
  categoryForm: FormGroup;
  iconList: any[] = [];
  imageList: any[] = [];
  filterList: any[] = [];
  selectedFilterList: any[] = [];

  constructor(
    private appMessageService: AppMessageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private providerMaterCategoryService: ProviderMaterCategoryService,
    private providerMaterFilterService: ProviderMaterFilterService,
  ) { }

  get f() {
    return this.categoryForm.controls;
  }

  ngOnInit() {
    this.setConfig();
  }

  setConfig() {
    this.buildCategoryForm();
    this.getMaterFilterListByFilter();
    this.parentId = this.activatedRoute.snapshot.params['parentId'];
    if (this.parentId) {
      this.providerMaterCategoryService.getMaterCategoryById(this.parentId).subscribe(res => {
        this.parentId = res.data[0];
        this.selectedFilterList = this.parentId.filters
        this.f.parentId.setValue(this.parentId);
        this.f.filters.setValue(this.parentId.filters)
      }, err => {
        this.router.navigateByUrl(`/admin/category/category-list`);
      });
    }
  }

  buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      icon: [''],
      image: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(165)]],
      keywords: [[]],
      filters: [[]],
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
    this.f.filters.setValue(this.selectedFilterList.map(item => {
      return {
        filter: item.filter,
        fields: item.fields
      }
    }))

    this.providerMaterCategoryService.addMaterCategory(this.categoryForm.value).subscribe(
      (res) => { this.appMessageService.createBasicNotification('success', "Category Added Successfully"); this.router.navigateByUrl(`/admin/category/category-list`); },
      (err) => { this.appMessageService.createBasicNotification('success', "Category Not Added") }
    );
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



  getMaterFilterListByFilter(filter = '') {
    this.providerMaterFilterService.getMaterFilterListByFilter(0, 5, { filter }).subscribe(res => {
      this.filterList = res.data.map(item => {
        return {
          ...item,
          _checked: true,
          _child_Checked: item.fields.map(() => true)
        }
      });
    }, err => {
      this.filterList = [];
    })
  }

  addFilter(item: any) {
    const index = this.selectedFilterList.findIndex((i) => i.filter === item.filter)
    const obj = {
      ...item,
      _checked: true,
      fields: item.fields.filter((v, i) => {
        return item._child_Checked[i];
      }),
    }
    obj._child_Checked = item.fields.map(() => true);

    if (index === -1) {
      this.selectedFilterList.push(obj);
    } else {
      this.selectedFilterList[index] = obj;
    }
  }

  removeFilter(index: number) {
    this.selectedFilterList.splice(index, 1);
  }
}
