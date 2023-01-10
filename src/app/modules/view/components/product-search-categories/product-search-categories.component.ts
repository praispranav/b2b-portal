import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-search-categories',
  templateUrl: './product-search-categories.component.html',
  styleUrls: ['./product-search-categories.component.scss']
})
export class ProductSearchCategoriesComponent implements OnInit {
  searchParams: any = {};
  selectedCategory: any = {}
  moq: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.searchParams = params;
      this.moq = params.moq
    })
  }


  @Input('categories') categoriesList: any[] = [];

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

  ngOnInit() {

  }

  submitMoq(){
    this.router.navigate([], { queryParams: { ...this.searchParams, moq: this.moq } })
  }

  get getCategoryName(){
    const result = this.categoriesList.find((i)=> i._id === this.searchParams.categoryId)
    if(result) return result.name;
    else return ''
  }

  onSelect(categoryId) {
    this.router.navigate([], { queryParams: { ...this.searchParams, categoryId: categoryId } })
  }
}
