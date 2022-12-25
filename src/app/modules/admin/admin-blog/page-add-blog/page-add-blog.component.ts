import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-blog',
  templateUrl: './page-add-blog.component.html',
  styleUrls: ['./page-add-blog.component.scss']
})
export class PageAddBlogComponent implements OnInit {
  handleChange(event) { }
  addBlogInfo: FormGroup;
  searchOptions=[
    {label: "Demo", value: "demo"},
    {label: "Test", value: "test"},
    {label: "Dummy", value: "dummy"},
    {label: "Testing", value: "testing"},
  ];
  constructor( private router: Router,
    private formBuilder: FormBuilder,) { }
    get f() {
      return this.addBlogInfo.controls;
    }
  ngOnInit() {
    this.buildBlogInformationForm();
  }
  buildBlogInformationForm() {
    this.addBlogInfo = this.formBuilder.group({
      postName: ["", [Validators.required]],
      category: ["", [Validators.required]],
      banner: ["", [Validators.required]],
      description: ["", [Validators.required]],
   
      
     
     
    });
  }
  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

}
