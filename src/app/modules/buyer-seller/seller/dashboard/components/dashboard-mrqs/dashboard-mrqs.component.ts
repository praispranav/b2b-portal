import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../../environments/environment';
import { RequestQuotationService } from '../../../../../../core/providers/user/request-quotation.service';

@Component({
  selector: 'app-dashboard-mrqs',
  templateUrl: './dashboard-mrqs.component.html',
  styleUrls: ['./dashboard-mrqs.component.scss']
})
export class DashboardMrqsComponent implements OnInit {
  baseUrl:string;
  rfqList: any[] = [];


  constructor(private requestForQuotationService: RequestQuotationService) { }

  ngOnInit() {
    this.baseUrl=environment.imageStorage;
    this.getRequestForQuotationByUser();
  }

  getRequestForQuotationByUser(){
    this.requestForQuotationService.getRequestForQuotationByCategories().subscribe((res)=>{
      console.log("Request Data", res);
      if(res.data) this.rfqList = res.data
    })
  }

}
