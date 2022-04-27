import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-r-and-d',
  templateUrl: './form-r-and-d.component.html',
  styleUrls: ['./form-r-and-d.component.scss']
})
export class FormRAndDComponent implements OnInit {
  randdForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  get f() {
    return this.randdForm.controls;
  }

  ngOnInit() {
    this.buildRanddForm();
  }

  buildRanddForm() {
    this.randdForm = this.formBuilder.group({
      certificateName: ['', [Validators.required]],
      certifiedBy: ['', [Validators.required]],
      businessScope: ['', [Validators.required]],
      selectNo: ['', [Validators.required]],
      selectYes: ['', [Validators.required]],
      businessDate: ['', [Validators.required]],
    })
  }
}
