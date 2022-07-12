import { Component, OnInit } from '@angular/core';
import { ProviderHelpDisputeService } from '../../../core/providers/user/provider-help-dispute.service';

@Component({
  selector: 'app-page-dispute-list',
  templateUrl: './page-dispute-list.component.html',
  styleUrls: ['./page-dispute-list.component.scss']
})
export class PageDisputeListComponent implements OnInit {
  helpDisputeList: any[] = [];

  constructor(
    private providerHelpDisputeService: ProviderHelpDisputeService,
  ) { }

  ngOnInit() {
    this.getHelpDisputeListByFilter(0, 1000, {});
  }

  getHelpDisputeListByFilter(index: number, length: number, query: any = {}) {
    this.providerHelpDisputeService
      .getHelpDisputeListByFilter(index, length, query)
      .subscribe((res) => {
        this.helpDisputeList = res.data;
      });
  }
}
