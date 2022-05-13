import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PageBlogAddComponent } from './page-blog-add/page-blog-add.component';
import { PageBlogEditComponent } from './page-blog-edit/page-blog-edit.component';
import { PageBlogListComponent } from './page-blog-list/page-blog-list.component';
import { PageBlogViewComponent } from './page-blog-view/page-blog-view.component';


@NgModule({
  declarations: [PageBlogAddComponent, PageBlogEditComponent, PageBlogListComponent, PageBlogViewComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
