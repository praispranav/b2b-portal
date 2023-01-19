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
    { name: 'City', prop: 'city' },
    { name: 'Listing Date', prop: 'timestamp' },
    { name: 'Status', prop: 'status' },

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
    // this.fetchSampleAdvance()
  }

  getUsers() {
    this.userVerificationService.getUsers().subscribe((res) => {
      console.log('res', res)
      if (res.header.code === 200) {
        this.advanceRows = res.data.map((i) => {
          return {
            ...i, timestamp: moment(new Date(i.timestamp)).format('YYYY-DD-MM')
          }
        })
      }
    })
  }


  onActivate(event) { }


 async view(id,role) {
   
    if(role=='buyer'){
      this.router.navigate(['/admin/user-list/buyer-view'], { queryParams: { id: id, type: 'buyer' } });
    }
    else{

      this.router.navigate(['/admin/user-list/user-view'], { queryParams: { id: id, type: 'seller' } });
    }
  }
}
