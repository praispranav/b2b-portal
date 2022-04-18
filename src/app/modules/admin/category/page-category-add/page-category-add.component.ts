import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-page-category-add",
  templateUrl: "./page-category-add.component.html",
  styleUrls: ["./page-category-add.component.scss"],
})
export class PageCategoryAddComponent implements OnInit {
  categoryForm: FormGroup;
  tags:string[] = ["Smith", "Jane"];
  options = [
    { value: "jack", label: "Jacks" },
    { value: "lucy", label: "Lucy" },
    { value: "disabled", label: "Disabled", disabled: true },
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
    });
  }

  subCategoryForm() {
    const formData = this.categoryForm.value;
    // API CALL
    console.log(formData);
  }
}
