import { Component, OnInit } from '@angular/core';
import { ProviderCompanyProfileService } from '../../../../../core/providers/user/provider-company-profile.service';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  mainCategoryName = "";
  isVerifiedByAdmin: string = ''
  constructor(private companyProfileService: ProviderCompanyProfileService, ) { }

  ngOnInit() {
    this.getCompanyProfile();
  }

  getCompanyProfile(){
    this.companyProfileService.getCompanyProfileByUserId().subscribe((res)=>{
      console.log("CompanyProfile", res)
      if(res.category) this.mainCategoryName = res.category.name
      if(res.isVerified) this.isVerifiedByAdmin = res.isVerified
    })
  }

}
