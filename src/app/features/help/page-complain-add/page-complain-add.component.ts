import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-page-complain-add',
  templateUrl: './page-complain-add.component.html',
  styleUrls: ['./page-complain-add.component.scss']
})
export class PageComplainAddComponent implements OnInit {
  complaintdispute: FormGroup

  constructor(private formbuilder: FormBuilder) { }

  get f() { return this.complaintdispute.controls }

  ngOnInit() {
    this.buildcomplaintdispute()
  }

  buildcomplaintdispute() {
    this.complaintdispute = this.formbuilder.group({
      subject: ['', [Validators.required, Validators.maxLength(200)]],
      description: ['', [Validators.required]]
    })
  }
}

