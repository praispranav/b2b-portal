import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
@Component({
  selector: 'app-page-dispute-add',
  templateUrl: './page-dispute-add.component.html',
  styleUrls: ['./page-dispute-add.component.scss']
})
export class PageDisputeAddComponent implements OnInit {
  complaintdispute:FormGroup

  constructor(private formbuilder:FormBuilder ) { }

  get f() {return this.complaintdispute.controls}
  
  ngOnInit() {
    this.buildcomplaintdispute()
  }
  buildcomplaintdispute () {
    this.complaintdispute=this.formbuilder.group({
      subject:['',[Validators.required,Validators.maxLength(200)]],
      sellerlink:['',[Validators.required]],
      description:['',[Validators.required]],
      
    })
  }
}
