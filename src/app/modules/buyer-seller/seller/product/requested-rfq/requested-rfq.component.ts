import { Component, OnInit } from '@angular/core';
import { ProviderUserAuthService } from "../../../../../core/providers/auth/provider-user-auth.service";
import { RequestQuotationService } from "../../../../../core/providers/user/request-quotation.service";

@Component({
  selector: 'app-requested-rfq',
  templateUrl: './requested-rfq.component.html',
  styleUrls: ['./requested-rfq.component.scss']
})
export class RequestedRfqComponent implements OnInit {
  userInfor: any = null;
  requestForQutationList: any[] = [];

  constructor(
    private requestForQuotation: RequestQuotationService,
    private authService: ProviderUserAuthService
  ) {}

  ngOnInit() {
    const jwt_decode = this.authService.currentUserValueObjTokenDecoded;
    console.log("JwtDecode", jwt_decode);
    if (jwt_decode) {
      this.userInfor = jwt_decode;
    }

    this.getRequestForQuotationList();
  }

  getRequestForQuotationList() {
    this.requestForQuotation.getRequestForQuotationByUser().subscribe((res) => {
      if (Array.isArray(res.data)) this.requestForQutationList = res.data;
    });
  }

}
