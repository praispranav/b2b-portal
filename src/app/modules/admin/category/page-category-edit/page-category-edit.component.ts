import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderMaterCategoryService } from '../../../../core/providers/master/provider-mater-category.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private providerMaterCategoryService: ProviderMaterCategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  get f() {
    return this.categoryForm.controls;
  }

  ngOnInit() {
    this.buildCategoryForm();
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
    this.providerMaterCategoryService.updateMaterCategory(this.categoryForm.value).subscribe(
      (res) => {
        alert('Success');
        this.router.navigateByUrl(`/admin/category/category-list`);
      },
      (err) => { alert('Error') }
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
}
