import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../../../core/providers/user/agent.service';
import { ProviderCompanyProfileService } from '../../../../../core/providers/user/provider-company-profile.service';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  mainCategoryName = "";
  isVerifiedByAdmin: string = ''
  userDetails: any;
  disable: boolean = false;
  constructor(
    private companyProfileService: ProviderCompanyProfileService,
    private agentService: AgentService
  ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("currentUserAuth")).data;
    this.getCompanyProfile();
  }

  getCompanyProfile() {
    this.companyProfileService.getCompanyProfileByUserId().subscribe((res) => {
      console.log("CompanyProfile", res)
      if (res.category) this.mainCategoryName = res.category.name
      if (res.isVerified) this.isVerifiedByAdmin = res.isVerified
    })
  }


  request(): void {
    let payload;
    if (this.userDetails.role === "seller") {
      payload = {
        sellerId: this.userDetails._id,
        sellerName: this.userDetails.fName + " " + this.userDetails.lName,
        company: this.userDetails.company,
        email: this.userDetails.email,
        phone: this.userDetails.phone,
        city: this.userDetails.city,
        country: this.userDetails.country,
        password: this.userDetails.password,
        role: this.userDetails.role,
        isVerified: this.userDetails.isVerified,
        isApprovedByAdmin: this.userDetails.isApprovedByAdmin,
        agentReuest: "Admin",
        status: "Pending",
        assignAgent: "No",
        assignToAgent: false,
        nameAgent: "",
        agentId: "",
      };
    }
    this.agentService.requestSend(payload).subscribe(
      (res) => {
        this.disable = true;
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

}
