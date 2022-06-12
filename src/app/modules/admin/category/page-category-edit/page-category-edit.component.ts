import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-page-category-edit',
  templateUrl: './page-category-edit.component.html',
  styleUrls: ['./page-category-edit.component.scss'],
})

export class PageCategoryEditComponent implements OnInit {
  categoryForm: FormGroup;
  handlePreview;
  status: boolean = false;
  options = [
    { value: "jack", label: "Jacks" },
    { value: "lucy", label: "Lucy" },
    { value: "disabled", label: "Disabled", disabled: true },
  ];
  fileList = [
    {
      uid: -1,
      name: "xxx.png",
      status: "done",
      url: "http://pages.revox.io/dashboard/3.0.0/html/condensed/assets/img/profiles/avatar_small2x.jpg",
    },
  ];

  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.categoryForm.controls;
  }

  ngOnInit() {
    this.buildCategoryForm();
  }

  buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      option: ["", [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      keywords: [["Smith", "Jane"], [Validators.required]],
      image: [""],
      status: [""]
    });
  }

  subCategoryForm() {
    const formData = this.categoryForm.value;
  }
  showStatus(changeEvent: any) {
    this.status = changeEvent.target.checked;
  }
}

