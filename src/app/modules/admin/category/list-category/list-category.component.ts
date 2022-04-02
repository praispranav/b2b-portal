import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/provider/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  categoryList: any[];
  constructor(private route: Router, private categoryService: CategoryService, private router: Router) {
    this.categoryList = []
  }

  ngOnInit(): void {
    this.getList();
  }
  navigateToAdd() {
    this.route.navigate(['/admin/category/add-category'])
  }



  getList() {
    this.categoryService.getCategoryList().subscribe((res) => {
      if (Array.isArray(res)) {
        this.categoryList = res;
        console.log(this.categoryList)
      }
    })
  }

  findParentCategory(parentId: string) {
    const obj = this.categoryList.find((item) => item._id === parentId)
    if (obj) return obj.category
    else if (parentId === 'None') return "None"
    else "None"
  }

  deleteCategory(category: any) {
    return this.categoryService.deleteCategory(category._id).subscribe((res) => {
      alert("Category Deleted" + category.category);
      this.getList();
    })
  }

  navigateToEdit(item: any) {
    CategoryService.selectedCategoryObj = item
    this.router.navigate(['/admin/category/edit-category'])
  }

}
