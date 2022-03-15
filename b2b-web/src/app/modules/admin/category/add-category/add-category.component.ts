import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../provider/category.service'
interface CategoryType {
  "parentCategory": string,
  "parentLevel": string,
  "category": string,
  "level": number,
  "tags": string,
  "description": string,
  "keywords": string
}

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  category: CategoryType;
  categoryList: any[] | any;
  categoryOptions: any[] = []
  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, private router: Router) {
    this.category = {
      "parentCategory": '',
      "parentLevel": '',
      "category": '',
      "level": 0,
      "tags": '',
      "description": '',
      "keywords": ''
    }
    this.categoryList = [];
  }

  ngOnInit(): void {
    this.getList();
  }
  save() {
    this.categoryService.addCategory(this.category).subscribe((res) => {
      alert("Category Saved Id:" + res)
    }, (error) => alert('Category Not Added.'))
  }

  submit() {
    let requestPayload = this.category;
    this.categoryService.addCategory(requestPayload).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['admin/category/list'])
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getList() {
    this.categoryService.getCategoryList().subscribe((res) => {
      if (Array.isArray(res)) {
        this.categoryList = res;
      }
    })
  }

  filterCategoryList(value: string | number) {
    const filterArray = this.categoryList.filter((item: any) => {
      console.log(item.level, value)
      return Number(item.level) == (Number(value) - 1)
    });
    this.categoryOptions = filterArray
    console.log(value, filterArray);
  }

  handleLevelChange(changeEvent: any) {
    const value = changeEvent.target.value;
    this.filterCategoryList(value);
  }

  handleDescriptionChange(changeEvent: any) {
    this.category.description = changeEvent.target.value
  }

}
