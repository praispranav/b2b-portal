import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../../../../core/providers/user/blog.service';
import { ImageService } from '../../../../core/providers/user/image.service';

@Component({
  selector: 'app-page-add-blog',
  templateUrl: './page-add-blog.component.html',
  styleUrls: ['./page-add-blog.component.scss']
})
export class PageAddBlogComponent implements OnInit {
  handleChange(event) { }
  addBlogInfo: FormGroup;
  file: File;
  image: string;

  searchOptions = [
    { label: "Demo", value: "demo" },
    { label: "Test", value: "test" },
    { label: "Dummy", value: "dummy" },
    { label: "Testing", value: "testing" },
  ];
  constructor(private router: Router,
    private formBuilder: FormBuilder, private blogService: BlogService,
    private imageService: ImageService,
  ) { }
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
      image: ["", [Validators.required]],
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

  addBlog() {
    let formData=this.addBlogInfo.value;
    let payload={
      postName: formData.postName,
      category: formData.category,
      image: this.image,
      description:formData.description,
    }
    this.blogService.addBlog(payload).subscribe(
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
    const file = event.target.files;
    if (file && file[0]) {
      this.uploadImageToServer(file[0]);
    } else {
      alert('Please upload a image')
    }

    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   this.imageBase64 = reader.result;
    //   this.addBlogInfo.patchValue({ imageUrl: reader.result as string })
    //   this.fileType = file.type;
    //   this.fileName = file.name;
    //   console.log('imageBase64', this.imageBase64);
    //   console.log('fileType', this.fileType);
    //   console.log('fileName', this.fileName);
    // }

  }

  uploadImageToServer(image) {
    return new Promise((resolve, reject) => {
      this.imageService.uploadImage(image).subscribe(
        (res) => {
          resolve(res)
          this.image = res.fileName;
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

}
