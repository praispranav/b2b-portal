import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../core/providers/user/blog.service';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss'] 
})
export class PageBlogComponent implements OnInit {
  blogList: any[] = [];

  constructor( private blogService:BlogService) { }

  ngOnInit() {
    this.getBlogs()
  }

getBlogs() {
   
  this.blogService.getBlog().subscribe(
    (res: any) => {
     
      this.blogList = res;
    },
    (err) => {
      console.log(err);
    }
  );
}

}
