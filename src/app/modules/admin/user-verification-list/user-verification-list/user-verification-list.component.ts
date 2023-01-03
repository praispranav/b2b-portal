

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-user-verification-list',
  templateUrl: './user-verification-list.component.html',
  styleUrls: ['./user-verification-list.component.scss']
})
export class UserVerificationListComponent implements OnInit {

  @ViewChild('addNewAppModal', { static: true }) addNewAppModal: ModalDirective;

  appName = null;
  appDescription = null;
  appPrice = null;
  appNotes = null;

  basicRows = [];
  basicSort = [];


  advanceColumns = [
    { name: 'Supplier/Buyer Name' },
    { name: 'Type' },
    { name: 'Country' },
    { name: 'State' },
    { name: 'City' },
    { name: 'Posted By' },
    { name: 'Listing Date' },
    {name:'Last Active Product'}

  ];

  advanceRows = [];
  @ViewChild(DatatableComponent, { static: true }) tableAdvance: DatatableComponent;


  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';

  constructor(
    private router: Router,
  ) {
    console.log(this.columnModeSetting);

    //   // push our inital complete list
    //   this.dynamicRows = data;
    // });

    this.fetchSampleAdvance(data => {

      this.advanceRows = data;
    });

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
    };
  }


  onActivate(event) { }


  fetchSampleAdvance(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table_browser.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit() { }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.basicSort.filter(function (d) {
      // Change the column name here
      // example d.places
      return d.title.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.basicRows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  showModal() {
    this.addNewAppModal.show();
  }
  addRow() {
    let temp = {
      appName: this.appName,
      description: this.appDescription,
      notes: this.appPrice,
      price: this.appNotes
    };
    //https://github.com/swimlane/ngx-datatable/issues/701
    // this.dynamicRows = [...this.dynamicRows, temp];
    this.addNewAppModal.hide();
  }
  select(event) {
    console.log(event);
  }

  onPage(event) {
    console.log(event);
  }
  view(){
    this.router.navigateByUrl('/admin/user-list/user-view');
  }
}
