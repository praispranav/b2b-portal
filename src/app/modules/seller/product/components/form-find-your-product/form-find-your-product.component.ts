import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-find-your-product',
  templateUrl: './form-find-your-product.component.html',
  styleUrls: ['./form-find-your-product.component.scss']
})
export class FormFindYourProductComponent implements OnInit {
  findYourProductForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.findYourProductForm.controls;
  }

  ngOnInit() {
    this.buildFindYourProduct();
  }
  buildFindYourProduct() {
    this.findYourProductForm = this.formBuilder.group({
      search: ['', [Validators.required]],

    });
  }
}
