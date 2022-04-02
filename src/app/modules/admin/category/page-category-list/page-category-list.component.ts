import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderCategoryService } from './../../../../core/providers/provider-category.service';

@Component({
  selector: 'app-page-category-list',
  templateUrl: './page-category-list.component.html',
  styleUrls: ['./page-category-list.component.scss']
})
export class PageCategoryListComponent implements OnInit {
  categoryList: any[];
  constructor(private route: Router, private providerCategoryService: ProviderCategoryService, private router: Router) {
    this.categoryList = []
  }

  ngOnInit(): void {
    this.getList();
  }
  navigateToAdd() {
    this.route.navigate(['/admin/category/add-category'])
  }



  getList() {
    this.providerCategoryService.getCategoryList().subscribe((res) => {
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
    return this.providerCategoryService.deleteCategory(category._id).subscribe((res) => {
      alert("Category Deleted" + category.category);
      this.getList();
    })
  }

  navigateToEdit(item: any) {
    ProviderCategoryService.selectedCategoryObj = item
    this.router.navigate(['/admin/category/edit-category'])
  }
}
