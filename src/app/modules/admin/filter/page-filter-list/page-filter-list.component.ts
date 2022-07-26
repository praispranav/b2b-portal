import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderMaterFilterService } from '../../../../core/providers/master/provider-mater-filter.service';
@Component({
  selector: 'app-page-filter-list',
  templateUrl: './page-filter-list.component.html',
  styleUrls: ['./page-filter-list.component.scss']
})
export class PageFilterListComponent implements OnInit {
  masterFilterList: any[] = [];

  constructor(
    private router: Router,
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

  getChildren(item: any) {
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
  }

  editItem(item: any) {
    this.router.navigateByUrl(`/admin/filter/filter-edit/${item['_id']}`)
  }

  deleteItem(item: any, nodeEl: any) {
    this.providerMaterFilterService.deleteMaterFilterById(item['_id']).subscribe(res => {
      window.alert('Filter Deleted');
      nodeEl.remove();
    });
  }

  filterTreeContainer(val: string) { }
}
