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
  blog: any = {}
  
  constructor(private blogService: BlogService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0, 0);
  
    this.activatedRouter.params.subscribe(params => {
      this._id = params['_id'];
      console.log('User Id: ', this._id);
    });

    this.blogService.getBlogById(this._id).subscribe(
      (data) => {
        console.log(data)
        this.blog = data;
      },
      (err) => {
        console.log(err);
      }
    );

  }

  }

