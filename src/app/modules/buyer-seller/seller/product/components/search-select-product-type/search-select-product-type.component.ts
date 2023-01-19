import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderMaterCategoryService } from '../../../../../../core/providers/master/provider-mater-category.service';
import { ProviderCategoryService } from '../../../../../../core/providers/user/provider-category.service';

@Component({
  selector: 'app-search-select-product-type',
  templateUrl: './search-select-product-type.component.html',
  styleUrls: ['./search-select-product-type.component.scss']
})
export class SearchSelectProductTypeComponent implements OnInit {
  keyword: string = '';
  recentCategory: any = {};
  fav: string = ''
  showChildren:boolean;
  searchedCategories: any[] = [];
  childrensss:any[]=["heko","hdg","hdhe","heko","hdg","hdhe","heko","hdg","hdhe"];
  allCategoryListType3: any = [];
  categoryListType3:any [] = [];
  preViewItem: any = null;
  // ProviderMaterCategoryService
  constructor(
    private categoryService: ProviderMaterCategoryService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.getCategoryListType3(0, 1000, { level: "0" });
    this.getRecentCategories();
  }
  showChildrens(val:boolean){
    setTimeout(() => this.showChildren= val,300);
     
     
  }

  mouseOut(val:boolean){
    setTimeout(() => this.showChildren= val,1500);
  }
  

  selectFavCategory(){
    localStorage.setItem('selectedCategoryId', this.recentCategory._id);
    this.router.navigateByUrl('/seller/product/product-add');
  }

  selectSearchedCategory(item){
    localStorage.setItem('selectedCategoryId', item._id)
    this.router.navigateByUrl('/seller/product/product-add');
  }

  selectExploredCategory(item){
    localStorage.setItem('selectedCategoryId', item._id)
    this.router.navigateByUrl('/seller/product/product-add');
  }

  getRecentCategories(){
    this.categoryService.getRecent().subscribe((res)=>{
      if(res.data.searchedCategories[0]){
        this.recentCategory = res.data.searchedCategories[0];
        this.fav = this.recentCategory.name
      }
      // console.log("RecentCategory", this.recentCategory)
    });
  }

  filterCategory() {
    const keyword = this.keyword;
    
    this.categoryService
      .filterByKeyword(keyword)
      .subscribe((res) => {
        const newList = [];
        const searchedCategories = res.data.searchedCategories;
        const parents = res.data.parents;

        searchedCategories.forEach((category) => {
          const newTree = this.includeParents(parents, category);
          newList.push({
            mainCategoryName: category.name,
            value: category._id,
            label: newTree + " >> " + category.name,
          });
        });
        this.searchedCategories = newList;
        console.log("Resolved");
      });
  }

  includeParents(parent, category, newTree = "") {
    if (category.level == "0") return newTree;
    else {
      const findParent = parent.find(
        (parentCat) => parentCat._id === category.parentId
      );
      // console.log("FIndParent", findParent,category.parentId, parent)
      newTree = findParent.name + " >> " + category.name;
      console.log("NewTree", newTree);
      return this.includeParents(parent, findParent, newTree);
    }
  }

  getCategoryListType3(
    index: number,
    length: number,
    query: any = {}
  ) {
    this.categoryService
      .getMaterCategoryListByFilter(index, length, query)
      .subscribe((res) => {
        this.categoryListType3 = res.data.map((i) => {
          this.allCategoryListType3.push(i);
          return {
            ...i,
            _name: i.name,
            _hasChildren: true,
            _isEditable: true,
            _isDeletable: true,
          };
        });
      });
  }

  getChildren(item: any, nodeEl: any) {
    if (this.preViewItem) {
      this.remChildren(item);
    }
    this.categoryService
      .getMaterCategoryListByFilter(0, 1000, { parentId: item["_id"] })
      .subscribe((res) => {
        item["_toggle"] = true;
        this.preViewItem = item;
        this.preViewItem["_nodeEl"] = nodeEl;
        item["children"] = res.data.map((i) => {
          this.allCategoryListType3.push(i);
          return {
            ...i,
            _name: i.name,
            _hasChildren: true,
            _isEditable: true,
            _isDeletable: true,
          };
        });
      });
  }

  remChildren(cur: any) {
    this.removeRecChild(cur, this.categoryListType3);
    this.preViewItem = null;
  }

  removeRecChild(cur: any, arr: any[]) {
    if (Array.isArray(arr)) {
      arr.forEach((item) => {
        if (item.parentId === cur.parentId) {
          item["children"] = [];
          item["_toggle"] = false;
        } else {
          this.removeRecChild(cur, item["children"]);
        }
      });
    }
  }

  selectExtraCategory(category) {
    // let name = category.name;
    // if (category.level == "0") {
    // } else if (category.level == "1") {
    //   const parent = this.includeParents(this.allCategoryList, category);
    //   name = parent;
    // } else {
    //   console.log("All Catgories", this.allCategoryList);
    //   const parent = this.includeParents(this.allCategoryList, category);
    //   name = parent + " >> " + category.name;
    // }
    // debugger;
    // console.log("Selected Category", name, category._id);
    // this.categories = [
    //   { label: name, value: category._id },
    //   ...this.categories,
    // ];
    // this.requestQuotationForm2.patchValue({ productCategory: category._id });
    // console.log(
    //   "Selected Category2",
    //   this.requestQuotationForm2.value.productCategory
    // );
  }

}
