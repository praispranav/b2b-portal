import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {
  searchType: string = 'Product'
  searchText: string = ''
  
  constructor(private router:Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params => {
        this.searchText =  params['search'];
        if( params['searchType'] &&  params['searchType'].length > 0){
          this.searchType =  params['searchType'];
        }
      }
    )
   }

  ngOnInit() {
  }
  
  search(){
    if(this.searchType === "Product")this.router.navigate(['/b2b/product-search'], { queryParams:{ search: this.searchText, searchType: this.searchType }})
    else if(this.searchType === 'Seller')  this.router.navigate(['/b2b/seller-search'], { queryParams:{ search: this.searchText, searchType: this.searchType }})
  }
}
