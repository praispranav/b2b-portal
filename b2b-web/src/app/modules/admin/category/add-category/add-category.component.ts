import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../provider/category.service'
interface CategoryType {
  "parentCategory": string,
  "parentLevel": string,
  "category": string,
  "level": string,
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
  category: CategoryType
  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, private router: Router) {
    this.category = {
      "parentCategory": '',
      "parentLevel": '',
      "category": '',
      "level": '',
      "tags": '',
      "description": '',
      "keywords": ''
    }
  }

  ngOnInit(): void {
  }
  save() {
    this.categoryService.addCategory(this.category).subscribe((res) => {
      alert("Category Saved Id:" + res)
    }, (error) => alert('Category Not Added.'))
  }
  submit() {
    let requestPayload = this.category;
    console.log('requestPayload', requestPayload);
    console.log('this.customer', this.category);
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

}
