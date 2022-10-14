import { subProductDetails } from './../components/form-product-details/form-product-details.component';
import { Router } from '@angular/router';


import { productInfo } from './../components/form-product-information/form-product-information.component';
import { Component, OnInit } from '@angular/core';
import { subProductDetails } from '../components/form-product-details/form-product-details.component';
import { tradeInfo } from '../components/form-trade-information/form-trade-information.component';
import { shippingInfo } from '../components/form-shipping-details/form-shipping-details.component';
import { AppMessageService } from '../../../../../../core/services/app-message.service';
import { ProviderProductInformationService } from '../../../../../core/providers/user/provider-product-information.service';

@Component({
  selector: 'app-page-product-add',
  templateUrl: './page-product-add.component.html',
  styleUrls: ['./page-product-add.component.scss']
})
export class PageProductAddComponent implements OnInit {
  isAddingProductWhichNotOnPortal:boolean = false;
  
  
  constructor( private appMessageService:AppMessageService, private router:Router,private providerProductInformationService: ProviderProductInformationService) { }


  productInfoForm(productInfo:productInfo){
     console.log(productInfo);
  }

  
  productAddForm() {

  



     // this.providerTradeInformationService.addTradeInformation(this.tradeInfo.value).subscribe(
    //   (res) => {
    //     this.resetFormGroup(this.tradeInformationForm);
    //     window.alert('API Success');
    //   },
    //   (err) => {
    //     window.alert('API Error');
    //   }
    // );
  }
  ngOnInit() {
    
  }   
    
    
}

