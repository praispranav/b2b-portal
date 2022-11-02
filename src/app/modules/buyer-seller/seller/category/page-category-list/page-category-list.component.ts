import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderCategoryService } from '../../../../../core/providers/user/provider-category.service';
import { AppMessageService } from '../../../../../core/services/app-message.service';
import Swal from 'sweetalert2';
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
    private appMessageService: AppMessageService,
    private providerCategoryService: ProviderCategoryService,
  ) { }

  ngOnInit() {
    this.getCategoryListByCategory(0, 1000, { level: "0" });
  }

  getCategoryListByCategory(index: number, length: number, query: any = {}) {
    this.providerCategoryService
      .getCategoryListByFilter(index, length, query)
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
      this.remChildren(item)
    }
    this.providerCategoryService
      .getCategoryListByFilter(0, 1000, { parentId: item['_id'] })
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

  remChildren(cur: any) {
    this.removeRecChild(cur, this.masterCategoryList)
    this.preViewItem = null;
  }

  removeRecChild(cur: any, arr: any[]) {
    arr.forEach(item => {
      if (item.parentId === cur.parentId) {
        item['children'] = [];
        item['_toggle'] = false;
      } else {
        this.removeRecChild(cur, item['children'])
      }
    })
  }

  addCategory(item?: any) {
    if (item) {
      this.router.navigateByUrl(`/seller/category/category-add/${item['_id']}`);
    } else {
      this.router.navigateByUrl(`/seller/category/category-add`);
    }
  }

  editItem(item: any) {
    if (item['parentId']) {
      this.router.navigateByUrl(`/seller/category/category-edit/${item['_id']}/${item['parentId']}`);
    } else {
      this.router.navigateByUrl(`/seller/category/category-edit/${item['_id']}`);
    }
  }
  deleteItem(item: any, nodeEl: any) {
    this.providerCategoryService.deleteCategoryById(item['_id']).subscribe(
      (res) => { this.appMessageService.createBasicNotification('success', "Category Deleted Successfully"); nodeEl.remove(); },
      (err) => { this.appMessageService.createBasicNotification('success', "Category Not Deleted") }
    );
  }
 
  confirmationPopup(item: any, nodeEl: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem(item, nodeEl);       
      }
    })
  }
  

  

}
