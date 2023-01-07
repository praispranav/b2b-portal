import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerSearchService } from '../../../../core/providers/user/seller-search.service';

interface SearchParams {
  type?: string;
  id?: string;
}

@Component({
  selector: 'app-user-verification-vew',
  templateUrl: './user-verification-vew.component.html',
  styleUrls: ['./user-verification-vew.component.scss']
})
export class UserVerificationVewComponent implements OnInit {
  searchParams: SearchParams = {};
  sellerDetails: any = {}

  constructor(private route: ActivatedRoute, private sellerSearchService: SellerSearchService) {
    this.route.queryParams.subscribe((params)=>{
      console.log("Params", params['type'])
      console.log("Params", params['id'])
      this.searchParams = params;
      console.log("AD", this.searchParams.id)
      if(params.type && params.type.length && params.id && params.id.length){
        this.getSellerDetails();
      }
    })
  }

  ngOnInit() {

  }

  getSellerDetails(){
    console.log("BD", this.searchParams.id)
    this.sellerSearchService.sellerSingleAllDetails(this.searchParams.id).subscribe((res:any)=>{
      if(res.header.code == 200) this.sellerDetails = res.data
    })
  }
}
