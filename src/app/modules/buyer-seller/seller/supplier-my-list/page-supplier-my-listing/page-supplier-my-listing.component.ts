import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-page-supplier-my-listing',
  templateUrl: './page-supplier-my-listing.component.html',
  styleUrls: ['./page-supplier-my-listing.component.scss']
})
export class PageSupplierMyListingComponent implements OnInit {

  @ViewChild('addNewAppModal', { static: true }) addNewAppModal: ModalDirective;


  basicRows = [];
  basicSort = [];
  advanceColumns = [
    { name: 'Rendering engine' },
    { name: 'Browser' },
    { name: 'Platform' },
    { name: 'Engine version' },
    { name: 'CSS grade' }
  ];
  advanceRows = [];
  @ViewChild(DatatableComponent, { static: true }) tableAdvance: DatatableComponent;
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
  constructor() {
    console.log(this.columnModeSetting);
    this.fetch(data => {
      // cache our list
      this.basicSort = [...data];

      // push our inital complete list
      this.basicRows = data;
    });

    this.fetchSampleAdvance(data => {
      // push our inital complete list
      this.advanceRows = data;
    });

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
    };
  }
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  fetchSampleAdvance(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table_browser.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  ngOnInit() {
  }
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
  }

  showModal() {
    this.addNewAppModal.show();
  }

}
