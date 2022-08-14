import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderMaterFilterService } from '../../../../core/providers/master/provider-mater-filter.service';
import { ProviderMaterCategoryService } from './../../../../core/providers/master/provider-mater-category.service';
import { MessageService } from '../../../../@pages/components/message/message.service';

@Component({
  selector: 'app-page-category-edit',
  templateUrl: './page-category-edit.component.html',
  styleUrls: ['./page-category-edit.component.scss'],
})
export class PageCategoryEditComponent implements OnInit {
  parentId: any;
  category: any;
  categoryForm: FormGroup;
  iconList: any[] = [];
  imageList: any[] = [];
  filterList: any[] = [];
  selectedFilterList: any[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
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
    this.category = this.activatedRoute.snapshot.params['category'];
    this.parentId = this.activatedRoute.snapshot.params['parentId'];
    if (this.category) {
      this.providerMaterCategoryService.getMaterCategoryById(this.category).subscribe(res => {
        this.category = res.data[0];
        this.f._id.setValue(this.category['_id']);
        this.f.name.setValue(this.category['name']);
        this.iconList = [{
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: this.category['icon']
        }];
        this.imageList = [{
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: this.category['image']
        }];
        this.f.title.setValue(this.category['title']);
        this.f.description.setValue(this.category['description']);
        this.f.keywords.setValue(this.category['keywords']);
        this.f.level.setValue(this.category['level']);
        this.f.isActivated.setValue(this.category['isActivated']);
        this.selectedFilterList = this.category['filters'];
        this.f.filters.setValue(this.category['filters']);
      }, err => {
        this.router.navigateByUrl(`/admin/category/category-list`);
      });
    }
    if (this.parentId) {
      this.providerMaterCategoryService.getMaterCategoryById(this.parentId).subscribe(res => {
        this.parentId = res.data[0];
        this.f.parentId.setValue(this.parentId);
      }, err => {
        this.router.navigateByUrl(`/admin/category/category-list`);
      });
    }
  }

  buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      _id: [''],
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
      this.f.icon.setValue(this.iconList[0].url || await this.toBase64(this.iconList[0].originFileObj));
    }
    if (this.imageList.length > 0) {
      this.f.image.setValue(this.imageList[0].url || await this.toBase64(this.imageList[0].originFileObj));
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

    this.providerMaterCategoryService.updateMaterCategory(this.categoryForm.value).subscribe(
      (res) => { this.createBasicNotification('success', "Category Added Successfully"); this.router.navigateByUrl(`/admin/category/category-list`); },
      (err) => { this.createBasicNotification('success', "Category Not Added") }
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

  createBasicNotification(res: string, msg: string) {
    const currentTab: number = 0;


    const notificationModel: any = {
      type: 'flip',
      message: 'Filter added Successfully',
      color: 'Success',
      position: 'top-right',
      current: 0
    };

    const nofitcationStrings: any = [
      {
        heading: 'Flip Bar',
        desc: 'Awesome Loading Circle Animation',
        position: 'top-right',
        type: 'flip'
      },
    ];

    if (notificationModel.current != currentTab) {
      notificationModel.current = currentTab;
      this.messageService.remove();
    }

    notificationModel.position = nofitcationStrings[currentTab]['position'];
    notificationModel.type = nofitcationStrings[currentTab]['type'];
    notificationModel.color = res;
    notificationModel.message = msg;

    this.messageService.create(notificationModel.color, notificationModel.message, {
      Position: nofitcationStrings[currentTab]['position'],
      Style: notificationModel.type,
      Duration: 0
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
