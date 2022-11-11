import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-notice-bar-add',
  templateUrl: './page-notice-bar-add.component.html',
  styleUrls: ['./page-notice-bar-add.component.scss']
})
export class PageNoticeBarAddComponent implements OnInit {

  noticeForm: FormGroup;
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
    this.noticeForm = this.fb.group({
      title: ['', [Validators.required]],

    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
      this.columnModeSettingSmall = window.innerWidth < 560 ? 'standard' : 'force';
    };
  }
  get f() {
    return this.noticeForm.controls;
  }
  ngOnInit() { }
  isFieldValid(field: string) {
    return !this.noticeForm.get(field).valid && this.noticeForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }




}
