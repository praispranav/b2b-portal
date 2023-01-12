import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment'
import { ModalDirective } from 'ngx-bootstrap';
import { RequestQuotationService } from '../../../../core/providers/user/request-quotation.service';
@Component({
  selector: 'app-page-admin-mqr',
  templateUrl: './page-admin-mqr.component.html',
  styleUrls: ['./page-admin-mqr.component.scss']
})
export class PageAdminMqrComponent implements OnInit {

  @ViewChild('addNewAppModal', { static: true }) addNewAppModal: ModalDirective;

  appName = null;
  appDescription = null;
  appPrice = null;
  appNotes = null;

  selectedCategory: string = 'All';
  selectedStatus: string = 'All';
  categoryList: any[] = [];

  page: number = 1;
  pageSize: number = 100;

  basicRows = [];
  basicSort = [];

  advanceColumns = [
    { name: 'Product Name' },
    { name: 'Category' },
    { name: 'Posted By' },
    { name: 'Date Time' },
    { name: 'MOQ' },
    { name: 'Price $' },
    { name: 'Status' },
  ];

  selectedRfq: any = null;
  updateStatus: string = ''

  advanceRows = [];
  @ViewChild(DatatableComponent, { static: true }) tableAdvance: DatatableComponent;

  //No Option YET
  //https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';

  constructor(private requestForQuotationService: RequestQuotationService) {
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

    // this.fetchSampleAdvance(data => {
    //   // push our inital complete list
    //   this.advanceRows = data;
    // });

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
    };
  }
  // onSelect({ selected }) {
  //   this.selected.splice(0, this.selected.length);
  //   this.selected.push(...selected);
  // }

  onActivate(event) { }
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  fetchSampleDynamic(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table_sample.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  fetchSampleAdvance(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/table_browser-three.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit() {
    this.getAllRequestForQuotationList();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.basicSort.filter(function (d) {
      return d.title.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.basicRows = temp;
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

  getAllRequestForQuotationList() {
    this.requestForQuotationService.getAllRequestForQuotation({ 
      page:this.page, 
      pageSize: this.pageSize, 
      status: this.selectedStatus, 
      category: this.selectedCategory 
    }).subscribe((res) => {
      if ( Array.isArray(res.data) ) {
        const categoryIds:any = {};
        this.advanceRows = res.data.map((i) => {
          categoryIds[i.productCategory[0]] = i.category;
          return { ...i, dateTime: moment(i.timestamp).format('YYYY-MM-DD'), moq: i.quantity, price: i.budget }
        })
        console.log(this.advanceRows);
        this.categoryList =  Object.entries(categoryIds);
      }
    })
  }

  handleStatusChange(event){
    this.getAllRequestForQuotationList();
  }

  handleCategoryChange(){
    this.getAllRequestForQuotationList();
  }

  delete(row){
    this.selectedRfq = row;
    console.log(row);
    this.updateStatus = row.status
  }

  confirm(){
    console.log(this.selectedRfq);
    this.requestForQuotationService.updateStatus({ 
      status: this.selectedRfq.status, 
      _id: this.selectedRfq._id 
    }).subscribe((res)=>{
      console.log("Response", res);
    })
  }
}
