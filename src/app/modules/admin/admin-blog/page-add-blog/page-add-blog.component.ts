import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../../../../core/providers/user/blog.service';

@Component({
  selector: 'app-page-add-blog',
  templateUrl: './page-add-blog.component.html',
  styleUrls: ['./page-add-blog.component.scss']
})
export class PageAddBlogComponent implements OnInit {
  handleChange(event) { }
  addBlogInfo: FormGroup;
  file: File;
  fileType: any | string;
  fileName: string = '';
  imageBase64: string | any = "";
  searchOptions=[
    {label: "Demo", value: "demo"},
    {label: "Test", value: "test"},
    {label: "Dummy", value: "dummy"},
    {label: "Testing", value: "testing"},
  ];
  constructor( private router: Router,
    private formBuilder: FormBuilder, private blogService: BlogService) { }
    get f() {
      return this.addBlogInfo.controls;
    }
  ngOnInit() {
    this.buildBlogInformationForm();
  }
  buildBlogInformationForm() {
    this.addBlogInfo = this.formBuilder.group({
      postName: ["", [Validators.required]],
      category: [[]],
      file: ["", [Validators.required]],
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

  addBlog(){
    this.blogService.addBlog(this.addBlogInfo.value).subscribe(
      (res) => {
        this.resetFormGroup(this.addBlogInfo);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }

    )
  }

  private resetFormGroup(form: FormGroup) {
    form.reset();
  }

  fileUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageBase64 = reader.result;
      this.addBlogInfo.patchValue({ imageUrl: reader.result as string })
      this.fileType = file.type;
      this.fileName = file.name
    }
  }

}
