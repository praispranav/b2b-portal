import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-quality-control',
  templateUrl: './form-quality-control.component.html',
  styleUrls: ['./form-quality-control.component.scss']
})
export class FormQualityControlComponent implements OnInit {
  qualityControlForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  get f() {
    return this.qualityControlForm.controls;
  }

  ngOnInit() {
    this.buildQualityControlForm();
  }
  buildQualityControlForm() {
    this.qualityControlForm = this.formBuilder.group({
      processName: ['', [Validators.required]],
      processpicture: ['', [Validators.required]],
      description: ['', [Validators.required]],
      selectNo: ['', [Validators.required]],
      selectYes: ['', [Validators.required]],
    })
  }
}
