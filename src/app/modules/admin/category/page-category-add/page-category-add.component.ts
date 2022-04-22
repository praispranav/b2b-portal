import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-page-category-add",
  templateUrl: "./page-category-add.component.html",
  styleUrls: ["./page-category-add.component.scss"],
})
export class PageCategoryAddComponent implements OnInit {
  categoryForm: FormGroup;
  keywords = ["Smith", "Jane"];
  handlePreview;
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

  constructor(private formBuilder: FormBuilder) {}

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
      keywords: ["", [Validators.required]],
    });
  }

  subCategoryForm() {
    const formData = this.categoryForm.value;
    // API CALL
    console.log(formData);
  }
}
