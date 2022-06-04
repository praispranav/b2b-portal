import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-page-brand-approval-add',
  templateUrl: './page-brand-approval-add.component.html',
  styleUrls: ['./page-brand-approval-add.component.scss']
})
export class PageBrandApprovalAddComponent implements OnInit {
  brandAdd : FormGroup
  constructor( private fb : FormBuilder) { 
    this.brandAdd = this.fb.group({
      brandType : ['', Validators.required],
      serialNumber : ['', [Validators.required, Validators.minLength(9876543), Validators.maxLength(12345678)]],
      yourProducts : ['', Validators.required]
    });
  }
  get f() { return this.brandAdd.controls }

  ngOnInit() {
  }

}
