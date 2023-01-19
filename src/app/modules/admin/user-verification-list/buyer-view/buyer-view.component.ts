import { SellerSearchService } from './../../../../core/providers/user/seller-search.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserVerificationService } from '../../../../core/providers/user/user-verification.service';
interface SearchParams {
  type?: string;
  id?: string;
}

@Component({
  selector: 'app-buyer-view',
  templateUrl: './buyer-view.component.html',
  styleUrls: ['./buyer-view.component.scss']
})
export class BuyerViewComponent implements OnInit {
  searchParams: SearchParams = {};
  buyerDetails:any={
    buyer:{},
    buyerProfile:{}


  };
  flag:Boolean=false;
  checkedCards: any[] = [];
  constructor(private route:ActivatedRoute,private buyerSearchService:UserVerificationService,private userVerificationService: UserVerificationService ) {
    this.route.queryParams.subscribe((params)=>{
      console.log("Params", params['type'])
      console.log("Params", params['id'])
      this.searchParams = params;
      console.log("AD", this.searchParams.id)
      if(params.type && params.type.length && params.id && params.id.length){
        this.getBuyerDetails();
      }
    })
   }

  ngOnInit() {
  }
  getBuyerDetails(){
    console.log("BD", this.searchParams.id)
    this.buyerSearchService.getUsersById(this.searchParams.id).subscribe((res:any)=>{
      if(res.header.code == 200) this.buyerDetails=res.data;
      console.log(this.buyerDetails);
    })
  }
  checked(event){
    this.flag=!this.flag;
  }
  
  onApproveReject(userId, status){
    // let checkedCount = 0;
    // this.checkedCards.forEach((i)=> i ? checkedCount += 1 : '');
    // console.log("CheckedCount", checkedCount)
    // if(checkedCount === 5){
      this.userVerificationService.approveRejectUser(status, userId).subscribe((res)=>{
        console.log("Res", res)
        this.getBuyerDetails();
      })
    // }
  }
  // get CheckCount(){
  //   let checkedCount = 0;
  //   this.checkedCards.forEach((i)=> i ? checkedCount += 1 : '');
  //   return checkedCount
  // }

}
