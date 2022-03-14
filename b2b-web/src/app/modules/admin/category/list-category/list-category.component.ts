import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  navigateToAdd()
  {
    this.route.navigate(['/admin/category/manage'])
  }

}
