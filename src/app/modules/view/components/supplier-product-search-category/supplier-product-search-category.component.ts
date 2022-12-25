
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderCategoryService } from '../../../../core/providers/user/provider-category.service';

@Component({
  selector: 'app-supplier-product-search-category',
  templateUrl: './supplier-product-search-category.component.html',
  styleUrls: ['./supplier-product-search-category.component.scss']
})
export class SupplierProductSearchCategoryComponent implements OnInit {
  searchQuery:any = {}
  @Input('categoriesList') categoriesList: any[] = [];
  @Input('revenueList') revenueList: any[] = [];
  @Input('certificationsList') certificationsList: any[] = [];

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

  constructor(private categoryService:ProviderCategoryService, private route:ActivatedRoute, private router:Router) { 
    this.route.queryParams.subscribe(
      params => {
        this.searchQuery = params
      }
    )
  }

  

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList(){
    // this.categoryService.getCategoryListByUser().subscribe((res)=>{
    //   if(Array.isArray(res.data)){
    //     this.categoriesList = res.data.map((i)=> ({ label: i.name, value: i._id }))
    //   }
    // })
  }

  handleCategoryFilter(categoryId){
    this.router.navigate([],{ queryParams: {...this.searchQuery, category: categoryId} })
  }

}
