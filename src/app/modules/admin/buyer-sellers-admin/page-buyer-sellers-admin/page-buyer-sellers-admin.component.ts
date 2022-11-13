import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-page-buyer-sellers-admin',
  templateUrl: './page-buyer-sellers-admin.component.html',
  styleUrls: ['./page-buyer-sellers-admin.component.scss']
})
export class PageBuyerSellersAdminComponent implements OnInit {

  @ViewChild('addNewAppModal', { static: true }) addNewAppModal: ModalDirective;

  appName = null;
  appDescription = null;
  appPrice = null;
  appNotes = null;

  basicRows = [];
  basicSort = [];
  selectedOption;
  selectedOption1;
  selectedOption2;
  selectedOption3;
  buyerSellersAdmin: FormGroup;
  options = [
    { value: 'India', label: 'India' },
    { value: 'Malaysia', label: 'Malaysia' },
    { value: 'Pakistan', label: 'Pakistan' }
  ];
  options1 = [
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Gujarat', label: 'Gujarat' }
  ];
  options2 = [
    { value: 'Ranchi', label: 'Ranchi' },
    { value: 'Siwan', label: 'Siwan' },
    { value: 'Ahmedabad', label: 'Ahmedabad' }
  ];
  options3 = [
    { value: 'Apparel', label: 'Apparel' },
    { value: 'Shoes', label: 'Shoes' },
    { value: 'Cloth', label: 'Cloth' }
  ];
  advanceColumns = [
    { name: 'Select' },
    { name: 'Company Logo' },
    { name: 'Seller/Buyer Name' },
    { name: 'Type' },
    { name: 'Country' },
    { name: 'State' },
    { name: 'City' },
    { name: 'Posted By' },
    { name: 'Listing Date' },
    { name: 'Last Active Products' }
  ];

  advanceRows = [];
  @ViewChild(DatatableComponent, { static: true }) tableAdvance: DatatableComponent;

  //No Option YET
  //https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';

  constructor(private formBuilder: FormBuilder,
  ) {

    console.log(this.columnModeSetting);
    this.fetch(data => {
      // cache our list
      this.basicSort = [...data];

      // push our inital complete list
      this.basicRows = data;
    });



    // this.fetchSampleDynamic(data => {
    //   // push our inital complete list
    //   this.dynamicRows = data;
    // });

    this.fetchSampleAdvance(data => {
      // push our inital complete list
      this.advanceRows = data;
    });

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
    };
  }
  // onSelect({ selected }) {
  //   this.selected.splice(0, this.selected.length);
  //   this.selected.push(...selected);
  // }
  get f() {
    return this.buyerSellersAdmin.controls;
  }
  ngOnInit() {
    this.buildBuyerSellersAdminForm();
  }
  buildBuyerSellersAdminForm() {
    this.buyerSellersAdmin = this.formBuilder.group({
      category: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],

      city: ["", [Validators.required]]

    });
  }
  onActivate(event) { }
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


}
