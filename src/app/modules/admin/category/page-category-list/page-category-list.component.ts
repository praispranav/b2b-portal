import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../../../@pages/components/message/message.service';
import { ProviderMaterCategoryService } from '../../../../core/providers/master/provider-mater-category.service';
@Component({
  selector: 'app-page-category-list',
  templateUrl: './page-category-list.component.html',
  styleUrls: ['./page-category-list.component.scss']
})
export class PageCategoryListComponent implements OnInit {
  preViewItem: any = null;
  masterCategoryList: any[] = [];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private providerMaterCategoryService: ProviderMaterCategoryService,
  ) { }

  ngOnInit() {
    this.getMaterCategoryListByCategory(0, 1000, { level: "0" });
  }

  getMaterCategoryListByCategory(index: number, length: number, query: any = {}) {
    this.providerMaterCategoryService
      .getMaterCategoryListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterCategoryList = res.data.map(i => {
          return {
            ...i,
            _name: i.name,
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
    this.providerMaterCategoryService
      .getMaterCategoryListByFilter(0, 1000, { parentId: item['_id'] })
      .subscribe((res) => {
        item['_toggle'] = true;
        this.preViewItem = item;
        this.preViewItem['_nodeEl'] = nodeEl;
        item['children'] = res.data.map(i => {
          return {
            ...i,
            _name: i.name,
            _hasChildren: true,
            _isEditable: true,
            _isDeletable: true
          }
        });
      });
  }

  remChildren(item: any) {
    item['children'] = [];
    item['_toggle'] = false;
    this.preViewItem = null;
  }

  addCategory(item: any) {
    if (item) {
      this.router.navigateByUrl(`/admin/category/category-add/${item['_id']}`);
    } else {
      this.router.navigateByUrl(`/admin/category/category-add`);
    }
  }

  editItem(item: any) {
    if (item['parentId']) {
      this.router.navigateByUrl(`/admin/category/category-edit/${item['_id']}/${item['parentId']}`);
    } else {
      this.router.navigateByUrl(`/admin/category/category-edit/${item['_id']}`);
    }
  }

  deleteItem(item: any, nodeEl: any) {
    this.providerMaterCategoryService.deleteMaterCategoryById(item['_id']).subscribe(
      (res) => { this.createBasicNotification('success', "Category Deleted Successfully"); nodeEl.remove(); },
      (err) => { this.createBasicNotification('success', "Category Not Deleted") }
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
