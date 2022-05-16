import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-page-complain-add',
  templateUrl: './page-complain-add.component.html',
  styleUrls: ['./page-complain-add.component.scss']
})
export class PageComplainAddComponent implements OnInit {
  complainForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get f() { return this.complainForm.controls; }

  ngOnInit() {
    this.buildComplainForm();
  }

  buildComplainForm() {
    this.complainForm = this.formBuilder.group({
      subject: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required]],
    });
  }
}
