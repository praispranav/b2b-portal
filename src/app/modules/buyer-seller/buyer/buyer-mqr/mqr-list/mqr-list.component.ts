import { Component, OnInit } from '@angular/core';
import { RequestQuotationService } from '../../../../../core/providers/user/request-quotation.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-mqr-list',
  templateUrl: './mqr-list.component.html',
  styleUrls: ['./mqr-list.component.scss']
})
export class MqrListComponent implements OnInit {
  baseUrl:string;
  requestForQutationList: any[] = [];

  constructor(
    private requestForQuotation: RequestQuotationService,
  ) {}

  ngOnInit() {
    this.baseUrl= environment.imageStorage;
    this.getRequestForQuotationList();
  }

  getRequestForQuotationList() {
    this.requestForQuotation.getRequestForQuotationByUser().subscribe((res) => {
      if (Array.isArray(res.data)) this.requestForQutationList = res.data;
    });
  }
}