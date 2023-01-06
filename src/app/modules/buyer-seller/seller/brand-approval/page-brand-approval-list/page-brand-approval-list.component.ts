import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from '../../../../../../environments/environment';
import { ProviderBrandApprovalService } from '../../../../../core/providers/user/provider-brand-approval.service';

@Component({
  selector: 'app-page-brand-approval-list',
  templateUrl: './page-brand-approval-list.component.html',
  styleUrls: ['./page-brand-approval-list.component.scss']
})
export class PageBrandApprovalListComponent implements OnInit {
  brandApprovalList: any[] = [];
imgUrl:string = environment.imageStorage;

  constructor(
    private providerBrandApprovalService: ProviderBrandApprovalService,
  ) {

    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 960;
      this.columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
      this.columnModeSettingSmall = window.innerWidth < 560 ? 'standard' : 'force';
    };
  }
  sortName = null;
  sortValue = null;
  selected = [];
  // No Option YET
  // https://github.com/swimlane/ngx-datatable/issues/423
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
  columnModeSettingSmall = window.innerWidth < 560 ? 'standard' : 'force';

  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `assets/data/table.json`);

  //   req.onload = () => {
  //     cb(JSON.parse(req.response));
  //   };

  //   req.send();
  // }

  ngOnInit() {
    this.getBrandApprovalListByFilter(0, 1000, {});
  }
  onActivate(event) { }

  getBrandApprovalListByFilter(index: number, length: number, query: any = {}) {
    this.providerBrandApprovalService
      .getBrandApprovalListByFilter(index, length, query)
      .subscribe((res) => {
        if (Array.isArray(res.data)) {
          this.brandApprovalList = res.data.map((i, index) => {
            const date = new Date(i.timestamp);
            return {
              ...i, srNo: index + 1,
              addedOn: moment(date).format('YYYY-DD-MM hh:mm')
            }
          });
        }
        console.log('Admin', res)
      });
  }

  getImage(file){
    console.log(file)
    return file.image
  }
}