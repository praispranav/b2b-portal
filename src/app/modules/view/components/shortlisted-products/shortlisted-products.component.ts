import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProductService } from '../../../../core/providers/user/form-product.service';

@Component({
  selector: 'app-shortlisted-products',
  templateUrl: './shortlisted-products.component.html',
  styleUrls: ['./shortlisted-products.component.scss']
})
export class ShortlistedProductsComponent implements OnInit {
  searchParams: any = {}
  constructor(private router: Router, private productService: FormProductService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((i)=>{
      this.searchParams = i
    })
  }

  addedProducts: any[] = [];
  @Input('type') type?: string = 'Product' 

  ngOnInit() {
    this.checkProducts();
    this.productService.stringSubject.subscribe((a)=>{
      this.checkProducts();
    })
  }

  removeAddedProduct(productId){
    this.productService.removeProduct(productId);
  }

  checkProducts(){
    const products = localStorage.getItem(this.productService.productConstant);
      if(products){
        const parsed = JSON.parse(products);
        // if(this.type === 'Seller'){
        //   this.addedProducts = parsed.filter((i)=> i.userId === this.searchParams.sellerId);
        // } else {
          this.addedProducts = parsed;
        // }
      }
      console.log(products);
  }

  navigateToSearchEnquiry(){
    localStorage.removeItem(this.productService.contactUsKey)
  }

}
