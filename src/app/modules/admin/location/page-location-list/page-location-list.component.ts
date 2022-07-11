import { Component, OnInit } from '@angular/core';
import { TreeModel, TreeNode } from 'angular-tree-component';
import { ProviderMaterCountryService } from '../../../../core/providers/master/provider-mater-country.service';
import { ProviderMaterStateService } from '../../../../core/providers/master/provider-mater-state.service';
import { ProviderMaterLocationService } from '../../../../core/providers/master/provider-mater-location.service';
@Component({
  selector: "app-page-location-list",
  templateUrl: "./page-location-list.component.html",
  styleUrls: ["./page-location-list.component.scss"],
})
export class PageLocationListComponent implements OnInit {
  masterLocationList: any[] = [];
  masterStateList: any[] = [];
  masterCountryList: any[] = [];

  constructor(
    private providerMaterLocationService: ProviderMaterLocationService,
    private providerMaterStateService: ProviderMaterStateService,
    private providerMaterCountryService: ProviderMaterCountryService
  ) { }

  ngOnInit() {
    this.getMaterCountryListByFilter(0, 1000, {});
  }

  getMaterLocationListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterLocationService
      .getMaterLocationListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterLocationList = res.data.map(i => {
          return {
            ...i, children: [
              { name: 'Loading...' }
            ]
          }
        });
      });
  }

  getMaterStateListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterStateService
      .getMaterStateListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterStateList = res.data.map(i => {
          return {
            ...i, children: [
              { name: 'Loading...' }
            ]
          }
        });
      });
  }

  getMaterCountryListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterCountryService
      .getMaterCountryListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterCountryList = res.data.map(i => {
          return {
            ...i, children: [
              { name: 'Loading...' }
            ]
          }
        });
      });
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
