import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterLocationService } from '../../../../core/providers/master/provider-mater-location.service';
import { ProviderMaterStateService } from '../../../../core/providers/master/provider-mater-state.service';
@Component({
  selector: "app-page-location-list",
  templateUrl: "./page-location-list.component.html",
  styleUrls: ["./page-location-list.component.scss"],
})
export class PageLocationListComponent implements OnInit {
  masterCountryList: any[] = [];

  constructor(
    private router: Router,
    private providerMaterCountryService: ProviderMaterCountryService,
    private providerMaterLocationService: ProviderMaterLocationService,
    private providerMaterStateService: ProviderMaterStateService
  ) { }

  ngOnInit() {
    this.getMaterCountryListByFilter(0, 1000, { level: "0" });
  }

  getMaterCountryListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterCountryService
      .getMaterCountryListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterCountryList = res.data.map(i => {
          return {
            ...i,
            _name: i.country,
            _hasChildren: true
          }
        });
      });
  }

  getChildren(item: any) {
    if (item['countryId'] && item['state']) {
      this.providerMaterLocationService
        .getMaterLocationListByFilter(0, 1000, { stateId: item._id })
        .subscribe((res) => {
          item['children'] = res.data.map(i => {
            return {
              ...i,
              _name: i.city
            }
          })
        });
    } else {
      this.providerMaterStateService
        .getMaterStateListByFilter(0, 1000, { countryId: item._id })
        .subscribe((res) => {
          item['children'] = res.data.map(i => {
            return {
              ...i,
              _name: i.state,
              _hasChildren: true
            }
          });
        });
    }
  }

  remChildren(item: any) {
    item['children'] = [];
  }

  editItem(item: any) {
    if (item['countryId'] && item['stateId']) {
      this.router.navigateByUrl(`/admin/location/location-edit/${item['countryId']}/${item['stateId']}/${item['_id']}`)
    } else if (item['countryId']) {
      this.router.navigateByUrl(`/admin/location/location-edit/${item['countryId']}/${item['_id']}`)
    } else if (item['_id']) {
      this.router.navigateByUrl(`/admin/location/location-edit/${item['_id']}`)
    }
  }

  deleteItem(item: any, nodeEl: any) {
    if (item['countryId'] && item['stateId']) {
      this.providerMaterLocationService.deleteMaterLocationById(item['_id']).subscribe(res => {
        window.alert('Location Deleted');
        nodeEl.remove();
      });
    } else if (item['countryId']) {
      this.providerMaterLocationService.deleteMaterLocationByStateId(item['_id']).subscribe(res => {
        this.providerMaterStateService.deleteMaterStateById(item['_id']).subscribe(res => {
          window.alert('State Deleted');
          nodeEl.remove();
        });
      });
    } else if (item['_id']) {
      this.providerMaterLocationService.deleteMaterLocationByCountryId(item['_id']).subscribe(res => {
        this.providerMaterStateService.deleteMaterStateByCountryId(item['_id']).subscribe(res => {
          this.providerMaterCountryService.deleteMaterCountryById(item['_id']).subscribe(res => {
            window.alert('Country Deleted');
            nodeEl.remove();
          });
        });
      });
    }
  }

  filterTreeContainer(val: string) { }
}
