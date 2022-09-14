import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProviderMaterFilterService } from '../../../../core/providers/master/provider-mater-filter.service';
import { AppMessageService } from '../../../../core/services/app-message.service';
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
    private appMessageService: AppMessageService,
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
      (res) => { this.appMessageService.createBasicNotification('success', "Filter Deleted Successfully"); nodeEl.remove(); },
      (err) => { this.appMessageService.createBasicNotification('success', "Filter Not Deleted") }
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
