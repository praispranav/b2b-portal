import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-notice-bar-add',
  templateUrl: './page-notice-bar-add.component.html',
  styleUrls: ['./page-notice-bar-add.component.scss']
})
export class PageNoticeBarAddComponent implements OnInit {

  title;
  constructor(private fb: FormBuilder) {
    this.attachedForm = this.fb.group({
      title: ['', [Validators.required]],

    });
  }
  attachedForm: FormGroup;
  ngOnInit() { }
  isFieldValid(field: string) {
    return !this.attachedForm.get(field).valid && this.attachedForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  getFormControl(name) {
    return this.attachedForm.controls[name];
  }

}
