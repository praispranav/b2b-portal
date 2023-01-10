

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ModalDirective } from 'ngx-bootstrap';
import { UserVerificationService } from '../../../../core/providers/user/user-verification.service';
import * as moment from "moment";
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-user-verification-list',
  templateUrl: './user-verification-list.component.html',
  styleUrls: ['./user-verification-list.component.scss']
})
export class UserVerificationListComponent implements OnInit {

  @ViewChild('addNewAppModal', { static: true }) addNewAppModal: ModalDirective;

  imageUrl: string = environment.imageStorage
  appName = null;
  appDescription = null;
  appPrice = null;
  appNotes = null;

  basicRows = [];
  basicSort = [];


  advanceColumns = [
    { name: 'Supplier/Buyer Name', prop: "name" },
    { name: 'Company Name', prop: "company" },
    { name: 'Type', prop: "role" },
    { name: 'Country', prop: "country" },
    // { name: 'State', prop:'state' },
    { name: 'City', prop: 'city' },
    // { name: 'Posted By', prop: '' },
    { name: 'Listing Date', prop: 'timestamp' },
    // { name: 'Last Active Product', prop: '' }

  ];

  advanceRows = [];
  @ViewChild(DatatableComponent, { static: true }) tableAdvance: DatatableComponent;


  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';

  constructor(
    private router: Router,
    private userVerificationService: UserVerificationService
  ) {
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
    };
  }

  ngOnInit() {
    this.getUsers();
    this.fetchSampleAdvance()
  }

  getUsers() {
    this.userVerificationService.getUsers().subscribe((res) => {
      console.log('res', res)
      if(res.header.code === 200){
        this.advanceRows = res.data.map((i)=>{
          return {
            ...i, timestamp: moment(new Date(i.timestamp)).format('YYYY-DD-MM')
          }
        })
      }
    })
  }


  onActivate(event) { }


  fetchSampleAdvance() {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table_browser.json`);

    req.onload = () => {
      console.log(req.response)
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
  select(event) {
    console.log(event);
  }

  onPage(event) {
    console.log(event);
  }
  view(sellerId) {
    this.router.navigate(['/admin/user-list/user-view'], { queryParams: { id: sellerId, type: 'seller'}});
  }
}
