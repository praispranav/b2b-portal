import { Component, OnInit } from '@angular/core';
import { ProviderHelpComplainService } from '../../../core/providers/user/provider-help-complain.service';

@Component({
  selector: 'app-page-complain-list',
  templateUrl: './page-complain-list.component.html',
  styleUrls: ['./page-complain-list.component.scss']
})
export class PageComplainListComponent implements OnInit {
  helpComplainList: any[] = [];

  constructor(
    private providerHelpComplainService: ProviderHelpComplainService,
  ) { }

  ngOnInit() {
    this.getHelpComplainListByFilter(0, 1000, {});
  }

  getHelpComplainListByFilter(index: number, length: number, query: any = {}) {
    this.providerHelpComplainService
      .getHelpComplainListByFilter(index, length, query)
      .subscribe((res) => {
        this.helpComplainList = res.data;
      });
  }
}
