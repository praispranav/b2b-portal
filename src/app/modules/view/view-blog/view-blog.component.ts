import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { param } from 'jquery';
import { BlogService } from '../../../core/providers/user/blog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  _id: string = ''
  blogList: any = {}
  constructor(private blogService: BlogService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.activatedRouter.paramMap.subscribe((param: Params) => {
      let _id = param.get('_id');
      this.getBlogById(_id)

    });

  }
 
  getBlogById(_id) {

    this.blogService.getBlogById(_id).subscribe(
      (res: any) => {
       console.log(res)

        this.blogList = res;

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
