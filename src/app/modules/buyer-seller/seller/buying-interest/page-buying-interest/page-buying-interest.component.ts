import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-page-buying-interest',
  templateUrl: './page-buying-interest.component.html',
  styleUrls: ['./page-buying-interest.component.scss']
})
export class PageBuyingInterestComponent implements OnInit {

  buyingForm: FormGroup;
  condensedTableData = [
    {
      SrNo: '1',
      Description: 'this is the description',
      Status: 'Active'
    },
    {
      SrNo: '2',
      Description: 'this is the description',
      Status: 'Active'
    },
    {
      SrNo: '3',
      Description: 'this is the description',
      Status: 'Deactive'
    },
    {
      SrNo: '4',
      Description: 'this is the description',
      Status: 'Deactive'
    },
    {
      SrNo: '5',
      Description: 'this is the description',
      Status: 'Active'
    },

  ];
  condensedTableDataMap = {
    SrNo: null,
    Description: null,
    Status: null
  };
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
  columnModeSettingSmall = window.innerWidth < 560 ? 'standard' : 'force';
  constructor(private fb: FormBuilder) {
    this.buyingForm = this.fb.group({
      buyingInterest: ['', [Validators.required]],

    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
      this.columnModeSettingSmall = window.innerWidth < 560 ? 'standard' : 'force';
    };
  }
  get f() {
    return this.buyingForm.controls;
  }
  ngOnInit() { }
  isFieldValid(field: string) {
    return !this.buyingForm.get(field).valid && this.buyingForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

}
