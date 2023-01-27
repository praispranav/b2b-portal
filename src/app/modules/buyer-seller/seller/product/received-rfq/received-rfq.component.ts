import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { RequestQuotationService } from "../../../../../core/providers/user/request-quotation.service";

@Component({
  selector: 'app-received-rfq',
  templateUrl: './received-rfq.component.html',
  styleUrls: ['./received-rfq.component.scss']
})
export class ReceivedRfqComponent implements OnInit {
  baseUrl:string;
  userInfor: any = null;
  receivedForQutationList: any[] = [];

  constructor(
    private requestForQuotationService: RequestQuotationService
  ) {}

  ngOnInit() {
    this.baseUrl= environment.imageStorage;
    this.getReceivedForQuotationList();
  }

  getReceivedForQuotationList() {
    this.requestForQuotationService.getRequestForQuotationByCategories().subscribe((res) => {
      if(res.data) this.receivedForQutationList = res.data;
    });
  }

}