import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProviderCategoryService } from "../../../../core/providers/user/provider-category.service";

@Component({
  selector: "app-supplier-product-search-category",
  templateUrl: "./supplier-product-search-category.component.html",
  styleUrls: ["./supplier-product-search-category.component.scss"],
})
export class SupplierProductSearchCategoryComponent implements OnInit {
  searchQuery: any = {};
  @Input("categoriesList") categoriesList: any[] = [];
  @Input("revenueList") revenueList: any[] = [];
  @Input("certificationsList") certificationsList: any[] = [];
  @Input("employeeStrength") employeeStrengthList: any[] = [];
  @Input("businessTypes") businessTypeList: any[] = [];
 
  countryList: any[] = [
    {
      name: "England",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
    },
    {
      name: "Scotland",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg",
    },
    {
      name: "Wales",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg",
    },
  ];

  constructor(
    private categoryService: ProviderCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params;
    });
  }
  isReadMore = true
  checklist=this.categoriesList.length;

  showText() {
     this.isReadMore = !this.isReadMore
  }
  getCount() {
    return this.categoriesList.length;
  }
  ngOnInit() {}

  // findCategory(){
  //   const a = this.categoriesList.find((i)=> i._i === this.searchQuery.category)
  //   if(a) return a.name;
  //   else return ''
  // }

  get findCategory() {
    const a = this.categoriesList.find(
      (i) => i._id === this.searchQuery.category
    );
    if (a) return a.name;
    else return "";
  }

  clear(filterType) {
    this.router.navigate([], {
      queryParams: { ...this.searchQuery, [filterType]: undefined },
    });
  }

  categoryFilter(categoryId) {
    this.router.navigate([], {
      queryParams: { ...this.searchQuery, category: categoryId },
    });
  }

  certificationFilter(certification) {
    this.router.navigate([], {
      queryParams: { ...this.searchQuery, certification },
    });
  }

  revenueFilter(revenue) {
    this.router.navigate([], { queryParams: { ...this.searchQuery, revenue } });
  }

  employeeStrengthFilter(employeeStrength) {
    this.router.navigate([], {
      queryParams: { ...this.searchQuery, employeeStrength },
    });
  }

  businessTypeFilter(businessType) {
    this.router.navigate([], {
      queryParams: { ...this.searchQuery, businessType },
    });
  }
}
