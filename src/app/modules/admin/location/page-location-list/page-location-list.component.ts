import { Component, OnInit } from '@angular/core';
import { TreeModel, TreeNode } from 'angular-tree-component';
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
  asyncOptions = {
    getChildren: this.getChildren.bind(this)
  };

  constructor(
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
            name: i.country,
            hasChildren: true
          }
        });
      });
  }

  getChildren(node: TreeNode) {
    console.log(node)
    if (node.data['countryId'] && node.data['state']) {
      return new Promise((resolve, reject) => {
        this.providerMaterLocationService
          .getMaterLocationListByFilter(0, 1000, { stateId: node.data._id })
          .subscribe((res) => {
            resolve(res.data.map(i => {
              return {
                ...i,
                name: i.city
              }
            }));
          });
      });
    } else {
      return new Promise((resolve, reject) => {
        this.providerMaterStateService
          .getMaterStateListByFilter(0, 1000, { countryId: node.data._id })
          .subscribe((res) => {
            resolve(res.data.map(i => {
              return {
                ...i,
                name: i.state,
                hasChildren: true
              }
            }));
          });
      });
    }
  }

  filterFn(value: string, treeModel: TreeModel) {
    treeModel.filterNodes((node: TreeNode) => this.fuzzysearch(value, node.data.name));
  }

  fuzzysearch(needle: string, haystack: string) {
    const haystackLC = haystack.toLowerCase();
    const needleLC = needle.toLowerCase();

    const hlen = haystack.length;
    const nlen = needleLC.length;

    if (nlen > hlen) {
      return false;
    }
    if (nlen === hlen) {
      return needleLC === haystackLC;
    }
    outer: for (let i = 0, j = 0; i < nlen; i++) {
      const nch = needleLC.charCodeAt(i);

      while (j < hlen) {
        if (haystackLC.charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
    return true;
  }
}
