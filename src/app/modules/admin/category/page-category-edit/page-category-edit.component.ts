import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderCategoryService } from './../../../../core/providers/provider-category.service';

interface CategoryType {
  parentCategory: string;
  category: string;
  tags: string;
  description: string;
  keywords: string;
  parentLevel: number;
  parentId: string;
  level: number;
}
@Component({
  selector: 'app-page-category-edit',
  templateUrl: './page-category-edit.component.html',
  styleUrls: ['./page-category-edit.component.scss'],
})
export class PageCategoryEditComponent implements OnInit {
  categoryList: any[] | any;
  categoryOptions: any[] = [];

  category: CategoryType = {
    parentCategory: '',
    category: '',
    tags: '',
    description: '',
    keywords: '',
    parentLevel: -1,
    parentId: '',
    level: 0,
  };
  isEditMode: boolean = false;
  selectedCategoryObj: any;
  id: string | null;
  constructor(
    private providerCategoryService: ProviderCategoryService,
    private route: Router
  ) {
    this.id = '';
    this.selectedCategoryObj = '';
  }

  ngOnInit(): void {
    this.isEditMode = false;
    this.getList();

    console.log(
      'Category On Submit',
      ProviderCategoryService.selectedCategoryObj
    );
    this.category = ProviderCategoryService.selectedCategoryObj;
  }
  submit() {
    console.log(this.category);
    if (this.isEditMode) {
      console.log('Id', this.id);
      console.log(
        'Category On Submit',
        ProviderCategoryService.selectedCategoryObj
      );
      this.providerCategoryService
        .editCategory(
          ProviderCategoryService.selectedCategoryObj._id,
          ProviderCategoryService.selectedCategoryObj
        )
        .subscribe(
          (response: any) => {
            alert(response.message || 'category Saved');
            this.route.navigate(['admin/category/category-list']);
          },
          (error) => alert('category Not Saved')
        );
    } else {
      let requestPayload = this.category;

      this.providerCategoryService.addCategory(requestPayload).subscribe(
        (res) => {
          alert('Category Saved');
          this.route.navigate(['admin/category/category-list']);
        },
        (err: any) => {
          alert('Error' + err.response.data.message);
        }
      );
    }
  }
  getList() {
    this.providerCategoryService.getCategoryList().subscribe((res) => {
      if (Array.isArray(res)) {
        this.categoryList = res;
      }
    });
  }
  filterCategoryList(value: string | number) {
    const filterArray = this.categoryList.filter((item: any) => {
      console.log(item.level, value);
      return Number(item.level) == Number(value) - 1;
    });
    this.categoryOptions = filterArray;
  }
  findCategory(categoryName: string) {
    return this.categoryList.find((item:any) => item.category === categoryName);
  }
  handleLevelChange(changeEvent: any) {
    const value = changeEvent.target.value;
    this.filterCategoryList(value);
  }

  handleDescriptionChange(changeEvent: any) {
    this.category.description = changeEvent.target.value;
  }
  handleCategoryChange(changeEvent: any) {
    const value = changeEvent;
    const categoryObj = this.findCategory(value);
    if (categoryObj === 'None') {
      this.category.parentLevel = -1;
      this.category.level = -1 + 1;

      this.category.parentId = 'None';
    } else if (categoryObj) {
      this.category.parentId = categoryObj._id;
      this.category.parentLevel = categoryObj.level;
      this.category.level = Number(categoryObj.level + 1);
    } else {
      this.category.parentId = 'None';
    }
    console.log('VValue', this.category.parentId);
  }
}
