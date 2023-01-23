import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProviderMaterCategoryService } from "../../../../core/providers/master/provider-mater-category.service";

@Component({
  selector: "app-home-categories",
  templateUrl: "./home-categories.component.html",
  styleUrls: ["./home-categories.component.scss"],
})
export class HomeCategoriesComponent implements OnInit {
  parentCategories: any[] = [];
  payload = {
    skip: 0,
    limit: 50,
    query: {},
  };

  overlayLocation: any = {
    clientX: 0,
    clientY: 0,
  };

  selectedCategory: any = null;
  popoverVisible: boolean = false;

  subCategories: any[] = [];
  subSubCategories: any[] = [];
  readMore: any = {};

  constructor(
    private masterCategoryService: ProviderMaterCategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getParentCategories();
    this.getSubMasterCategories();
    this.getSubSubMasterCategories();
  }

  getParentCategories() {
    this.masterCategoryService
      .getMaterCategoryListByFilter(0, 50, { level: "0" })
      .subscribe((res) => {
        this.parentCategories = res.data;
      });
  }

  getSubMasterCategories() {
    this.masterCategoryService
      .getMaterCategoryListByFilter(0, 100, { level: "1" })
      .subscribe((res) => {
        this.subCategories = res.data;
      });
  }

  getSubSubMasterCategories() {
    this.masterCategoryService
      .getMaterCategoryListByFilter(0, 1000, { level: "2" })
      .subscribe((res) => {
        this.subSubCategories = res.data;
      });
  }

  getSubCategories(parentId: string) {
    const a = this.subCategories.filter((i) => {
      return i.parentId == parentId;
    });
    return a;
  }

  getSubSubCategories(parentId: string) {
    const a = this.subSubCategories.filter((i) => {
      return i.parentId == parentId;
    });
    return a;
  }

  selectCategory(category) {
    this.selectedCategory = category;
    this.popoverVisible = true;
  }

  unselectCategory() {
    this.popoverVisible = false;
  }

  handleParentCategoryClick(event) {
    const clientX = event.clientX;
    const clientY = event.clientY - 150;
    this.overlayLocation = { clientX, clientY };
  }

  handleNavigateToCategory(categoryId) {
    this.router.navigate([ "/b2b/product-search" ], {
      queryParams: {
        page: 1,
        searchType: "Product",
        pageSize: 10,
        search: "",
        categoryId: categoryId,
      },
    });
  }
  close() {
    //Can I close modal window manually?
    this.popoverVisible = false;
  }
}
