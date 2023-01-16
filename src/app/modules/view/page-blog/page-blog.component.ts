import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../core/providers/user/blog.service';


@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss'] 
})
export class PageBlogComponent implements OnInit {
  blogList: any[] = [];

  constructor( private blogService:BlogService, private router:Router) { }

  ngOnInit() {
    this.getBlogs()
  }

getBlogs() {
   
  this.blogService.getBlog().subscribe(
    (res: any) => {
     console.log(res)

      this.blogList = res;
    
    },
    (err) => {
      console.log(err);
    }
  );
}
view(_id:any){
  this.router.navigate(['/b2b/blog-view', _id])
}

}
