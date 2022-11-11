import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

@Component({
  selector: 'app-page-faq-add',
  templateUrl: './page-faq-add.component.html',
  styleUrls: ['./page-faq-add.component.scss']
})
export class PageFaqAddComponent implements OnInit {
  faqForm: FormGroup;
  options = [
    { value: 'jack', label: 'Jacks' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];

  csoptions = [
    { value: 'Web-safe', label: 'Web-safe' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'SegeoUI', label: 'SegeoUI' }
  ];

  tags = ['Smith', 'Jane'];
  selectedOption;
  selectedOptionCS;
  constructor(private fb: FormBuilder) {
    this.faqForm = this.fb.group({
      selectDrop: [''],
      askQ: ['', [Validators.required]],
      description: ['']
    })
  }
  ngOnInit() { }
  isFieldValid(field: string) {
    return !this.faqForm.get(field).valid && this.faqForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

}
