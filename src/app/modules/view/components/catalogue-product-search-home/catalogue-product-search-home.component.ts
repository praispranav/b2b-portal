import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-catalogue-product-search-home",
  templateUrl: "./catalogue-product-search-home.component.html",
  styleUrls: ["./catalogue-product-search-home.component.scss"],
})
export class CatalogueProductSearchHomeComponent implements OnInit {
  searchParams: any = {};
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((res) => {
      this.searchParams = res;
    });
  }

  @Input("categories") categoriesList: any[] = [
    // { name: "Men's Jackets" },
    // { name: "Women's Coats" },
    // { name: "Gym Fitness Sets" },
    // { name: "Outdoor Jackets" },
    // { name: "Outdoor& Hiking Clothing" },
    // { name: "Fleece" },
  ];

  countryList: any[] = [
  ];

  ngOnInit() {}

  selectCategory(categoryId) {
    console.log("CategooryId", categoryId);
    this.router.navigate([], {
      queryParams: { ...this.searchParams, categoryId: categoryId },
    });
  }

  get findCategory() {
    const categoryId = this.searchParams.categoryId;
    const result = this.categoriesList.find((i) => i._id === categoryId);
    if (result) return result.name;
    else return "";
  }

  removeCategory() {
    this.router.navigate([], {
      queryParams: { ...this.searchParams, categoryId: undefined },
    });
  }
}
