import { Component, OnInit } from '@angular/core';
import { ProviderBrandApprovalService } from '../../../../../core/providers/user/provider-brand-approval.service';

@Component({
  selector: 'app-page-brand-approval-list',
  templateUrl: './page-brand-approval-list.component.html',
  styleUrls: ['./page-brand-approval-list.component.scss']
})
export class PageBrandApprovalListComponent implements OnInit {
  brandApprovalList: any[] = [];

  constructor(
    private providerBrandApprovalService: ProviderBrandApprovalService,
  ) { }

  ngOnInit() {
    this.getBrandApprovalListByFilter(0, 1000, {});
  }

  getBrandApprovalListByFilter(index: number, length: number, query: any = {}) {
    this.providerBrandApprovalService
      .getBrandApprovalListByFilter(index, length, query)
      .subscribe((res) => {
        this.brandApprovalList = res.data;
      });
  }
}