import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-brand-approval-list',
  templateUrl: './brand-approval-list.component.html',
  styleUrls: ['./brand-approval-list.component.scss']
})
export class BrandApprovalListComponent implements OnInit {

  @ViewChild('addNewAppModal', { static: true }) addNewAppModal: ModalDirective;

  appName = null;
  appDescription = null;
  appPrice = null;
  appNotes = null;

  basicRows = [];
  basicSort = [];


  advanceColumns = [
   { name: 'Brand Name' },
    { name: 'Brand Type' },
    { name: 'Serial Number' },
    { name: 'Product Link' },
    // { name: 'MOQ' },
    // { name: 'Price $' },

  ];

  advanceRows = [];
  @ViewChild(DatatableComponent, { static: true }) tableAdvance: DatatableComponent;

  //No Option YET
  //https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';

  constructor() {
    console.log(this.columnModeSetting);
    this.fetch(data => {
      // cache our list
      this.basicSort = [...data];

      
      this.basicRows = data;
    });

  
    this.fetchSampleAdvance(data => {
     
      this.advanceRows = data;
    });

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
    };
  }
 

  onActivate(event) { }
  fetch(cb) {
    // const req = new XMLHttpRequest();
    // req.open('GET', `assets/data/table.json`);

    // req.onload = () => {
    //   cb(JSON.parse(req.response));
    // };

    // req.send();
  }

  fetchSampleDynamic(cb) {
    // const req = new XMLHttpRequest();
    // req.open('GET', `assets/data/table_sample.json`);

    // req.onload = () => {
    //   cb(JSON.parse(req.response));
    // };

    // req.send();
  }

  fetchSampleAdvance(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table_browser-four.json`);

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

  onPage(event){
    console.log(event);
  }
}

