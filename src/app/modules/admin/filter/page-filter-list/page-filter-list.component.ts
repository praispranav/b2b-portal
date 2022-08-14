import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../../@pages/components/message/message.service';
import { ProviderMaterFilterService } from '../../../../core/providers/master/provider-mater-filter.service';
@Component({
  selector: 'app-page-filter-list',
  templateUrl: './page-filter-list.component.html',
  styleUrls: ['./page-filter-list.component.scss']
})
export class PageFilterListComponent implements OnInit {
  preViewItem: any = null;
  masterFilterList: any[] = [];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private providerMaterFilterService: ProviderMaterFilterService,
  ) { }

  ngOnInit() {
    this.getMaterFilterListByFilter(0, 1000, { level: "0" });
  }

  getMaterFilterListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterFilterService
      .getMaterFilterListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterFilterList = res.data.map(i => {
          return {
            ...i,
            _name: i.filter,
            _hasChildren: true,
            _isEditable: true,
            _isDeletable: true
          }
        });
      });
  }

  getChildren(item: any, nodeEl: any) {
    if (this.preViewItem) {
      this.remChildren(this.preViewItem)
    }
    item['_toggle'] = true;
    this.preViewItem = item;
    this.preViewItem['_nodeEl'] = nodeEl;
    item['children'] = item.fields.map(i => {
      return {
        _name: i,
        _hasChildren: false,
        _isEditable: false,
        _isDeletable: false
      }
    });
  }

  remChildren(item: any) {
    item['children'] = [];
    item['_toggle'] = false;
    this.preViewItem = null;
  }

  editItem(item: any) {
    this.router.navigateByUrl(`/admin/filter/filter-edit/${item['_id']}`)
  }

  deleteItem(item: any, nodeEl: any) {
    this.providerMaterFilterService.deleteMaterFilterById(item['_id']).subscribe(
      (res) => { this.createBasicNotification('success', "Filter Deleted Successfully"); nodeEl.remove(); },
      (err) => { this.createBasicNotification('success', "Filter Not Deleted") }
    );
  }

  createBasicNotification(res: string, msg: string) {
    const currentTab: number = 0;
    const notificationModel: any = {
      type: 'flip',
      message: 'Filter added Successfully',
      color: 'Success',
      position: 'top-right',
      current: 0
    };

    const nofitcationStrings: any = [
      {
        heading: 'Flip Bar',
        desc: 'Awesome Loading Circle Animation',
        position: 'top-right',
        type: 'flip'
      },
    ];

    if (notificationModel.current != currentTab) {
      notificationModel.current = currentTab;
      this.messageService.remove();
    }

    notificationModel.position = nofitcationStrings[currentTab]['position'];
    notificationModel.type = nofitcationStrings[currentTab]['type'];
    notificationModel.color = res;
    notificationModel.message = msg;

    this.messageService.create(notificationModel.color, notificationModel.message, {
      Position: nofitcationStrings[currentTab]['position'],
      Style: notificationModel.type,
      Duration: 0
    });
  }
}
