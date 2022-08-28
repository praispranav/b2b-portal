import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppMessageService } from '../../../../core/services/app-message.service';
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterStateService } from '../../../../core/providers/master/provider-mater-state.service';
import { ProviderMaterLocationService } from '../../../../core/providers/master/provider-mater-location.service';

@Component({
  selector: 'app-page-location-list',
  templateUrl: './page-location-list.component.html',
  styleUrls: ['./page-location-list.component.scss']
})
export class PageLocationListComponent implements OnInit {
  preViewItem: any = null;
  masterCountryList: any[] = [];

  constructor(
    private router: Router,
    private appMessageService: AppMessageService,
    private providerMaterCountryService: ProviderMaterCountryService,
    private providerMaterStateService: ProviderMaterStateService,
    private providerMaterLocationService: ProviderMaterLocationService,
  ) { }

  ngOnInit() {
    this.getMaterCountryListByFilter(0, 1000, {});
  }

  getMaterCountryListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterCountryService
      .getMaterCountryListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterCountryList = res.data.map(i => {
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
    if (item['countryId'] && item['stateId']) {
      // Location
    } else if (item['countryId']) {
      this.providerMaterLocationService
        .getMaterLocationListByFilter(0, 1000, { stateId: item._id })
        .subscribe((res) => {
          item['_toggle'] = true;
          this.preViewItem = item;
          this.preViewItem['_nodeEl'] = nodeEl;
          item['children'] = res.data.map(i => {
            return {
              ...i,
              _name: i.name,
              _hasChildren: false,
              _isEditable: true,
              _isDeletable: true
            }
          });
        });
    } else {
      this.providerMaterStateService
        .getMaterStateListByFilter(0, 1000, { countryId: item._id })
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
  }

  remChildren(cur: any) {
    this.removeRecChild(cur, this.masterCountryList)
    this.preViewItem = null;
  }

  removeRecChild(cur: any, arr: any[]) {
    arr.forEach(item => {
      if (!(cur['countryId'] && cur['stateId']) && cur['countryId']) {
        if (cur['countryId'] === item['countryId']) {
          item['children'] = [];
          item['_toggle'] = false;
        } else {
          this.removeRecChild(cur, item['children'] ? item['children'] : []);
        }
      } else {
        item['children'] = [];
        item['_toggle'] = false;
      }
    })
  }

  addItem(item: any) {
    if (item['countryId'] && item['stateId']) {
    } else if (item['countryId']) {
      this.router.navigateByUrl(`/admin/location/location-add/location/${item['countryId']}/${item['_id']}`);
    } else {
      this.router.navigateByUrl(`/admin/location/location-add/state/${item['_id']}`);
    }
  }

  editItem(item: any) {
    if (item['countryId'] && item['stateId']) {
      this.router.navigateByUrl(`/admin/location/location-edit/location/${item['countryId']}/${item['stateId']}/${item['_id']}`)
    } else if (item['countryId']) {
      this.router.navigateByUrl(`/admin/location/location-edit/state/${item['countryId']}/${item['_id']}`)
    } else if (item['_id']) {
      this.router.navigateByUrl(`/admin/location/location-edit/country/${item['_id']}`)
    }
  }

  deleteItem(item: any, nodeEl: any) {
    if (item['countryId'] && item['stateId']) {
      this.providerMaterLocationService.deleteMaterLocationById(item['_id']).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Location Deleted Successfully"); nodeEl.remove(); },
        (err) => { this.appMessageService.createBasicNotification('success', "Location Not Deleted") }
      );
    } else if (item['countryId']) {
      this.providerMaterLocationService.deleteMaterLocationByStateId(item['_id']).subscribe(res => {
        this.providerMaterStateService.deleteMaterStateById(item['_id']).subscribe(
          (res) => { this.appMessageService.createBasicNotification('success', "State Deleted Successfully"); nodeEl.remove(); },
          (err) => { this.appMessageService.createBasicNotification('success', "State Not Deleted") }
        );
      });
    } else if (item['_id']) {
      this.providerMaterLocationService.deleteMaterLocationByCountryId(item['_id']).subscribe(res => {
        this.providerMaterStateService.deleteMaterStateByCountryId(item['_id']).subscribe(res => {
          this.providerMaterCountryService.deleteMaterCountryById(item['_id']).subscribe(
            (res) => { this.appMessageService.createBasicNotification('success', "Country Deleted Successfully"); nodeEl.remove(); },
            (err) => { this.appMessageService.createBasicNotification('success', "Country Not Deleted") }
          );
        });
      });
    }
  }
}