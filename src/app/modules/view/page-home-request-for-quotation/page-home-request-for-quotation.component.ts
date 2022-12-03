import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home-request-for-quotation',
  templateUrl: './page-home-request-for-quotation.component.html',
  styleUrls: ['./page-home-request-for-quotation.component.scss']
})
export class PageHomeRequestForQuotationComponent implements OnInit {
  handlePreview: any;
  ShowSecondSection:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  showDetailsForm(){
    this.ShowSecondSection = true;
  }

}
