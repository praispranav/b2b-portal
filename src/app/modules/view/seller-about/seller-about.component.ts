import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerSearchService } from '../../../core/providers/user/seller-search.service';

@Component({
  selector: 'app-seller-about',
  templateUrl: './seller-about.component.html',
  styleUrls: ['./seller-about.component.scss']
})
export class SellerAboutComponent implements OnInit {
  searchParams: any = {};
  tab: string = ""
  sellerDetails: any = {
    qualityControl:{},
    randd:{},
    companyProfile:{},
    companyDetail:{},
    certification:{},
    exportCapabilities:{},
    businessType:{},
    sellerDetails: {},
  }

  constructor(private sellerService: SellerSearchService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.searchParams = params;
      this.getSellerDetails();
    })
  }

  tabs: any[] = [
    { name: "Quality Control" },
    { name: "Seller Details" },
    { name: "Export Capability" },
    { name: "Company Introduction" },
    { name: "Manufacturing Capacity" },
    { name: "Certificate Center" },
    { name: "R & D" },
  ];

  ngOnInit() {
  }

  tabHandler(a: string) {
    // alert(a)
    this.tab = a
  }


  getSellerDetails() {
    this.sellerService.sellerSingleAllDetails( this.searchParams.sellerId ).subscribe((res: any) => {
      if (res.header.code === 200) this.sellerDetails = res.data
      if (res.header.code === 500) console.log('res', res)
    })
  }

}
