import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormProductService } from '../../../../core/providers/user/form-product.service';

@Component({
  selector: 'app-shortlisted-products',
  templateUrl: './shortlisted-products.component.html',
  styleUrls: ['./shortlisted-products.component.scss']
})
export class ShortlistedProductsComponent implements OnInit {

  constructor(private router: Router, private productService: FormProductService) {}

  addedProducts: any[] = [];

  // name: i.productName,
  //           price: i.moq,
  //           year: "",
  //           supplier: "",
  //           supplierId: i.userId, 
  //           productId: i._id,
  //           image: environment.imageStorage + i.productImage,

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
        this.addedProducts = parsed;
      }
      console.log(products);
  }

}
