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
  min: string = '';
  max: string = '';
  selectedCountries: any = {}

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.searchParams = params;
      this.moq = params.moq;
      this.min = params.min;
      this.max = params.max;
    })
  }

  supplierCountries:any []= [];
  countriesBasedOnProducts:any[] = []
  @Input('categories') categoriesList: any[] = [];
  @Input('supplierCountries') set ab(value){
    this.supplierCountries = value;
    this.countriesBasedOnProducts = value
  }
  // @Input('supplierCountries') countriesBasedOnProducts:any[] = []

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

  submitMoq() {
    this.router.navigate([], { queryParams: { ...this.searchParams, moq: this.moq } })
  }

  get getCategoryName() {
    const result = this.categoriesList.find(
      (i) => i._id === this.searchParams.categoryId
    )
    if (result) return result.name;
    else return ''
  }

  onSelect(categoryId) {
    this.router.navigate([], {
      queryParams: {
        ...this.searchParams,
        categoryId: categoryId
      }
    })
  }

  minPriceSearch() {
    this.router.navigate([], { 
      queryParams: { 
        ...this.searchParams, 
        min: this.min, 
        max: this.max 
      } 
    })
  }

  handleMinBlur() {
    // console.log("Sorry", this.max, this.min);
    // const min = Number(this.min);
    // const max = Number(this.max);

    // if(min > max){
    //   this.max = String(min + 1);
    // }
  }

  handleMaxBlur() {
    // console.log("Sorry", this.max, this.min);
    // const min = Number(this.min);
    // const max = Number(this.max);

    // if(min > max){
    //   this.min = String(max -1);
    // }
  }

  onChangeCountriesSearch(e){
    const value = e.target.value
    console.log("COuntries", value);
    if(value.trim().length === 0 && this.countriesBasedOnProducts.length > 0) return this.supplierCountries = this.countriesBasedOnProducts;
    this.supplierCountries =  this.countriesBasedOnProducts.filter((i)=>{
      return i.toLowerCase().includes(value.toLowerCase())
    } 
    )
  }

  onSelectCountry(event, value, index){
    const checked = event.target.checked;
    this.selectedCountries[value] = checked

    this.router.navigate([], { queryParams: { ...this.searchParams, countries: this.generateCountryQuery(this.selectedCountries) }})
  }

  generateCountryQuery(countries){
    const selectedCountries = Object.entries(countries);

    let str = '';
    selectedCountries.forEach((i)=>{
      if(i[1]) str += i[0] + '-'
    })
    
    return str
  }
}