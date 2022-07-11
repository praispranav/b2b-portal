import { Component, OnInit } from '@angular/core';
import { TreeModel, TreeNode } from 'angular-tree-component';
import { ProviderMaterCategoryService } from '../../../../core/providers/master/provider-mater-category.service';
@Component({
  selector: "app-page-category-list",
  templateUrl: "./page-category-list.component.html",
  styleUrls: ["./page-category-list.component.scss"],
})
export class PageCategoryListComponent implements OnInit {
  masterCategoryParentLevelList: any[] = [];
  asyncOptions = {
    getChildren: this.getChildren.bind(this)
  };

  constructor(
    private providerMaterCategoryService: ProviderMaterCategoryService
  ) { }

  ngOnInit() {
    this.getMaterCategoryListByFilter(0, 1000, { level: "0" });
  }

  getMaterCategoryListByFilter(index: number, length: number, query: any = {}) {
    this.providerMaterCategoryService
      .getMaterCategoryListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterCategoryParentLevelList = res.data.map(i => {
          return {
            ...i,
            hasChildren: true
          }
        });
      });
  }

  getChildren(node: TreeNode) {
    return new Promise((resolve, reject) => {
      this.providerMaterCategoryService
        .getMaterCategoryListByFilter(0, 1000, {parentId: node.data._id})
        .subscribe((res) => {
          resolve(res.data.map(i => {
            return {
              ...i,
              hasChildren: true
            }
          }));
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
