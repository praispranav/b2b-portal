import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap';
import { environment } from '../../../../../environments/environment';
import { MessageService } from '../../../../@pages/components/message/message.service';
import { ProviderBrandApprovalService } from '../../../../core/providers/user/provider-brand-approval.service';

@Component({
  selector: 'app-brand-approval-list',
  templateUrl: './brand-approval-list.component.html',
  styleUrls: ['./brand-approval-list.component.scss']
})
export class BrandApprovalListComponent implements OnInit {

  brandApprovalList: any[] = [];
  imgUrl: string = environment.imageStorage;

  page: number = 1;
  pageSize: number = 100;

  selectedBrand:any = null;
  updateStatus: string = 'All'

  constructor(
    private providerBrandApprovalService: ProviderBrandApprovalService,
    private messageService: MessageService
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


  ngOnInit() {
    this.getBrandApprovalListByFilter(0, 1000, {});
  }
  onActivate(event) { }

  delete(){}

  getBrandApprovalListByFilter(index: number, length: number, query: any = {}) {
    this.providerBrandApprovalService
      .getAll({ page: this.page, pageSize: this.pageSize })
      .subscribe((res) => {
        if (Array.isArray(res.data)) {
          this.brandApprovalList = res.data.map((i, index) => {
            const date = new Date(i.timestamp);
            return {
              ...i, srNo: index + 1,
              productsLink: i.products,
              addedOn: moment(date).format('YYYY-DD-MM hh:mm')
            }
          });
        }
        console.log('Admin', res)
      });
  }

  getImage(file) {
    return file.image
  }

  confirm(){
    this.providerBrandApprovalService.updateStatus({ 
      status: this.selectedBrand.status, 
      _id: this.selectedBrand._id 
    }).subscribe((res)=>{
      this.getBrandApprovalListByFilter(0, 1000, {});
      if(res.header.code) {
        this.messageService.success("Brand Approval Request Updated")
      } else {
        this.messageService.error("Brand Approval Request Not Updated")
      }
      console.log("Response", res);
    })
  }

  update(row){
    this.selectedBrand = row;
    this.updateStatus = row.status
  }
}

