import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { SellerSearchService } from '../../../../core/providers/user/seller-search.service';
import { UserVerificationService } from '../../../../core/providers/user/user-verification.service';

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
  sellerDetails: any = {
    sellerDetails:{},
    companyDetail: {},
    companyProfile: {},
    certification: {},
    exportCapabilities: {},
    businessType: {},
    qualityControl:{}
  }
  checkedCards: any[] = [];

  imageBaseUrl: string  = environment.imageStorage
  

  constructor(private route: ActivatedRoute, private sellerSearchService: SellerSearchService, private userVerificationService: UserVerificationService) {
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

  onCheckCards(index, event){
    this.checkedCards[index] = event.target.checked
  }

  onApproveReject(userId, status){
    let checkedCount = 0;
    this.checkedCards.forEach((i)=> i ? checkedCount += 1 : '');
    console.log("CheckedCount", checkedCount)
    if(checkedCount === 5){
      this.userVerificationService.approveRejectUser(status, userId).subscribe((res)=>{
        console.log("Res", res)
        this.getSellerDetails();
      })
    }
  }

  get CheckCount(){
    let checkedCount = 0;
    this.checkedCards.forEach((i)=> i ? checkedCount += 1 : '');
    return checkedCount
  }

  getSellerDetails(){
    console.log("BD", this.searchParams.id)
    this.sellerSearchService.sellerSingleAllDetails(this.searchParams.id).subscribe((res:any)=>{
      if(res.header.code == 200) this.sellerDetails = res.data
    })
  }
}
