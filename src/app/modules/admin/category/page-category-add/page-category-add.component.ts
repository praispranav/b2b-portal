import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-page-category-add',
  templateUrl: './page-category-add.component.html',
  styleUrls: ['./page-category-add.component.scss'],
})
export class PageCategoryAddComponent implements OnInit {
  categoryForm: FormGroup;
  options = [
    { value: 'jack', label: 'Jacks' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ]

  selectedOption;
  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.categoryForm.controls;
  }
  tags = ['Smith', 'Jane'];


  ngOnInit() {
    this.buildCategoryForm();
  }

  buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      name: ["", [Validators.required]],
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
