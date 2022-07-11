import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-page-suggestion-add',
  templateUrl: './page-suggestion-add.component.html',
  styleUrls: ['./page-suggestion-add.component.scss']
})
export class PageSuggestionAddComponent implements OnInit {
  complaintsuggest: FormGroup

  constructor(private formbuilder: FormBuilder) { }

  get f() { return this.complaintsuggest.controls }
  
  ngOnInit() {
    this.buildcomplaintsugesstion()
  }

  buildcomplaintsugesstion() {
    this.complaintsuggest = this.formbuilder.group({
      complaintsubject: ['', [Validators.required]],
      sellerlink: ['', [Validators.required, Validators.maxLength(200)]],
      discription: ['', [Validators.required]]
    })
  }
}
