import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../provider/category.service'
interface CategoryType {
  "parentCategory": string;
  "parentLevel": number;
  "category": string;
  "level": number;
  "tags": string;
  "description": string;
  "keywords": string;
  parentId: string;
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
      "parentCategory": 'None',
      "parentLevel": -1,
      "category": '',
      "level": 0,
      "tags": '',
      "description": '',
      "keywords": '',
      parentId:"",
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
    console.log("value", this.category)
    let requestPayload = this.category;
    this.categoryService.addCategory(requestPayload).subscribe(
      (res) => {
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
      return Number(item.level) == (Number(value) -1)  
    });
    this.categoryOptions = filterArray
  }

  handleLevelChange(changeEvent: any) {
    const value = changeEvent.target.value;
    this.filterCategoryList(value);
  }

  handleDescriptionChange(changeEvent:any){
    this.category.description = changeEvent.target.value
  }

  findCategory(categoryName:string){
    return this.categoryList.find((item)=> item.category === categoryName)
  }

  handleCategoryChange(changeEvent:any){
    const value = changeEvent;
    const categoryObj = this.findCategory(value)
    if(categoryObj === 'None'){
      this.category.parentLevel = -1
      this.category.level = -1 + 1

      this.category.parentId = "None"
    } else if(categoryObj){
      this.category.parentId = categoryObj._id
      this.category.parentLevel = categoryObj.level
      this.category.level = Number(categoryObj.level + 1)
    } else{
      this.category.parentId = 'None'
    }
    console.log( "VValue", this.category.parentId)
  }

}
