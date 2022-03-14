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
  constructor(private route: Router, private categoryService: CategoryService) {
    this.categoryList = []
  }

  ngOnInit(): void {
    this.getList();
  }
  navigateToAdd() {
    this.route.navigate(['/admin/category/manage'])
  }


  getList() {
    this.categoryService.getCategoryList().subscribe((res) => {
      if (Array.isArray(res)) {
        this.categoryList = res;
        console.log(this.categoryList)
      }
    })
  }

}
