import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { AgentService } from '../../../../core/providers/user/agent.service';
import { FormProductService } from '../../../../core/providers/user/form-product.service';

@Component({
  selector: 'app-assign-account-details',
  templateUrl: './assign-account-details.component.html',
  styleUrls: ['./assign-account-details.component.scss']
})
export class AssignAccountDetailsComponent implements OnInit {
  sellerId: string;
  agentId: string;
  productList: any[] = [];
  sellerTypeDetail: any;
  companyDetail: any;
  companyProfileDetail: any;
  exportCapibilityDetail: any;
  certificateDetail: any;
  qualityControlDetail: any;
  researchDevelopmentDetail: any;
  profileDetails: any;
  productPayload = {
    "_id": '',
    "isVerify": false,
    "isPreview": false
  };
  payload: any = {};
  productCheckList: any[] = [];
  baseUrl = environment.imageStorage;
  constructor(
    private formProductService: FormProductService,
    private activateRoute: ActivatedRoute,
    private agentService: AgentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe((res) => {
      try {
        this.sellerId = res['sId'];
        this.agentId = res['aId'];
        if (this.sellerId) {
          this.getAllProducts();
        }
        this.payload.userId = this.sellerId;
      } catch (error) {
        console.log('error', error);
      }
    })
    this.getSellerType();
    this.getCompanyDetails();
    this.getCompanyProfile();
    this.getExportCapibility();
    this.getCertificate();
    this.getQualityControl();
    this.getResearchDevelopment();
  }

  getSellerType(): void {
    this.agentService.getSellerTypeDetail(this.payload).subscribe(
      (response) => {
        this.sellerTypeDetail = response.data;
        if (this.sellerTypeDetail && this.sellerTypeDetail.isVerify === true) {
          this.sellerTypeDetail.checkedOne = true;
        } else if (this.sellerTypeDetail && this.sellerTypeDetail.isPreview === true) {
          this.sellerTypeDetail.checkedTwo = true;
        }
      }, (error) => {
        console.log('err', error);
      }
    )
  }

  getCompanyDetails(): void {
    this.agentService.getCompanyDetail(this.payload).subscribe(
      (response) => {
        this.companyDetail = response.data;
        if (this.companyDetail && this.companyDetail.isVerify === true) {
          this.companyDetail.checkedOne = true;
        } else if (this.companyDetail && this.companyDetail.isPreview === true) {
          this.companyDetail.checkedTwo = true;
        }
      }, (error) => {
        console.log('err', error);
      }
    )
  }

  getCompanyProfile(): void {
    this.agentService.getCompanyProfile(this.payload).subscribe(
      (response) => {
        this.companyProfileDetail = response.data;
        if (this.companyProfileDetail && this.companyProfileDetail.isVerify === true) {
          this.companyProfileDetail.checkedOne = true;
        } else if (this.companyProfileDetail && this.companyProfileDetail.isPreview === true) {
          this.companyProfileDetail.checkedTwo = true;
        }
      }, (error) => {
        console.log('err', error);
      }
    )
  }

  getExportCapibility(): void {
    this.agentService.getExportCapibilityDetail(this.payload).subscribe(
      (response) => {
        this.exportCapibilityDetail = response.data;
        if (this.exportCapibilityDetail && this.exportCapibilityDetail.isVerify === true) {
          this.exportCapibilityDetail.checkedOne = true;
        } else if (this.exportCapibilityDetail && this.exportCapibilityDetail.isPreview === true) {
          this.exportCapibilityDetail.checkedTwo = true;
        }
      }, (error) => {
        console.log('error', error);
      }
    )
  }

  getCertificate(): void {
    this.agentService.getCertificateDetail(this.payload).subscribe(
      (response) => {
        this.certificateDetail = response.data;
        if (this.certificateDetail && this.certificateDetail.isVerify === true) {
          this.certificateDetail.checkedOne = true;
        } else if (this.certificateDetail && this.certificateDetail.isPreview === true) {
          this.certificateDetail.checkedTwo = true;
        }
      }, (error) => {
        console.log('error', error);
      }
    )
  }

  getQualityControl(): void {
    this.agentService.getQualityControlDetail(this.payload).subscribe(
      (response) => {
        this.qualityControlDetail = response.data;
        if (this.qualityControlDetail && this.qualityControlDetail.isVerify === true) {
          this.qualityControlDetail.checkedOne = true;
        } else if (this.qualityControlDetail && this.qualityControlDetail.isPreview === true) {
          this.qualityControlDetail.checkedTwo = true;
        }
      }, (error) => {
        console.log('error', error);
      }
    )
  }

  getResearchDevelopment(): void {
    this.agentService.getResearchDevelopmentDetail(this.payload).subscribe(
      (response) => {
        this.researchDevelopmentDetail = response.data;
        if (this.researchDevelopmentDetail && this.researchDevelopmentDetail.isVerify === true) {
          this.researchDevelopmentDetail.checkedOne = true;
        } else if (this.researchDevelopmentDetail && this.researchDevelopmentDetail.isPreview === true) {
          this.researchDevelopmentDetail.checkedTwo = true;
        }
      }, (error) => {
        console.log('error', error);
      }
    )
  }

  getAllProducts(): void {
    let payload = {
      "page": 1,
      "pageSize": 1000,
      "searchText": '',
      "userId": this.sellerId
    }
    this.formProductService.getProductBySeller(payload).subscribe((res) => {
      this.productList = res.data;
      if (this.productList && this.productList.length > 0) {
        this.productList.forEach((element) => {
          if (element.isVerify === true) {
            element.checkedOne = true;
          } else if (element.isPreview === true) {
            element.checkedTwo = true;
          }
        })
      }
    }, (err) => {
      console.log('err', err);
    })
  }

  onRadioClick(event, data): void {
    console.log('data', event.target.value, data);
    this.productList.forEach((element, i) => {
      if (element._id === data._id) {
        if (event.target.value === 'Verify') {
          element.checkedOne = true;
          element.checkedTwo = false;
          this.productCheckList.push(element);
        } else {
          element.checkedTwo = true;
          element.checkedOne = false;
          this.productCheckList.push(element);
        }
      }
    });
  }

  onProfileRadioClick(event, type): void {
    if (event.target.value === 'Verify') {
      if (type === 'sellerType') {
        this.sellerTypeDetail.checkedOne = true;
        this.sellerTypeDetail.checkedTwo = false;
      } else if (type === 'companyDetail') {
        this.companyDetail.checkedOne = true;
        this.companyDetail.checkedTwo = false;
      } else if (type === 'companyProfile') {
        this.companyProfileDetail.checkedOne = true;
        this.companyProfileDetail.checkedTwo = false;
      } else if (type === 'exportCapibility') {
        this.exportCapibilityDetail.checkedOne = true;
        this.exportCapibilityDetail.checkedTwo = false;
      } else if (type === 'certificate') {
        this.certificateDetail.checkedOne = true;
        this.certificateDetail.checkedTwo = false;
      } else if (type === 'qualityControl') {
        this.qualityControlDetail.checkedOne = true;
        this.qualityControlDetail.checkedTwo = false;
      } else if (type === 'researchDevelopment') {
        this.researchDevelopmentDetail.checkedOne = true;
        this.researchDevelopmentDetail.checkedTwo = false;
      }
    } else {
      if (type === 'sellerType') {
        this.sellerTypeDetail.checkedOne = false;
        this.sellerTypeDetail.checkedTwo = true;
      } else if (type === 'companyDetail') {
        this.companyDetail.checkedOne = false;
        this.companyDetail.checkedTwo = true;
      } else if (type === 'companyProfile') {
        this.companyProfileDetail.checkedOne = false;
        this.companyProfileDetail.checkedTwo = true;
      } else if (type === 'exportCapibility') {
        this.exportCapibilityDetail.checkedOne = false;
        this.exportCapibilityDetail.checkedTwo = true;
      } else if (type === 'certificate') {
        this.certificateDetail.checkedOne = false;
        this.certificateDetail.checkedTwo = true;
      } else if (type === 'qualityControl') {
        this.qualityControlDetail.checkedOne = false;
        this.qualityControlDetail.checkedTwo = true;
      } else if (type === 'researchDevelopment') {
        this.researchDevelopmentDetail.checkedOne = false;
        this.researchDevelopmentDetail.checkedTwo = true;
      }
    }
  }

  sellerTypeVerify(): void {
    if (this.sellerTypeDetail.checkedOne === true) {
      let payload = {
        "_id": this.sellerTypeDetail._id,
        "isVerify": true,
        "isPreview": false
      }
      this.agentService.sellerTypeVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    } else if (this.sellerTypeDetail.checkedTwo === true) {
      let payload = {
        "_id": this.sellerTypeDetail._id,
        "isVerify": false,
        "isPreview": true
      }
      this.agentService.sellerTypeVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    }
  }

  companyDetailVerify(): void {
    if (this.companyDetail.checkedOne === true) {
      let payload = {
        "_id": this.companyDetail._id,
        "isVerify": true,
        "isPreview": false
      }
      this.agentService.CompanyDetailVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    } else if (this.companyDetail.checkedTwo === true) {
      let payload = {
        "_id": this.companyDetail._id,
        "isVerify": false,
        "isPreview": true
      }
      this.agentService.CompanyDetailVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    }
  }

  companyProfileVerify(): void {
    if (this.companyProfileDetail.checkedOne === true) {
      let payload = {
        "_id": this.companyProfileDetail._id,
        "isVerify": true,
        "isPreview": false
      }
      this.agentService.companyProfileVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    } else if (this.companyProfileDetail.checkedTwo === true) {
      let payload = {
        "_id": this.companyProfileDetail._id,
        "isVerify": false,
        "isPreview": true
      }
      this.agentService.companyProfileVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    }
  }

  exportCapibilityVerify(): void {
    if (this.exportCapibilityDetail.checkedOne === true) {
      let payload = {
        "_id": this.exportCapibilityDetail._id,
        "isVerify": true,
        "isPreview": false
      }
      this.agentService.ExportCapibilityVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    } else if (this.exportCapibilityDetail.checkedTwo === true) {
      let payload = {
        "_id": this.exportCapibilityDetail._id,
        "isVerify": false,
        "isPreview": true
      }
      this.agentService.ExportCapibilityVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    }
  }

  certificateVerify(): void {
    if (this.certificateDetail.checkedOne === true) {
      let payload = {
        "_id": this.certificateDetail._id,
        "isVerify": true,
        "isPreview": false
      }
      this.agentService.CertificateVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    } else if (this.certificateDetail.checkedTwo === true) {
      let payload = {
        "_id": this.certificateDetail._id,
        "isVerify": false,
        "isPreview": true
      }
      this.agentService.CertificateVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    }
  }

  qualityControlVerify(): void {
    if (this.qualityControlDetail.checkedOne === true) {
      let payload = {
        "_id": this.qualityControlDetail._id,
        "isVerify": true,
        "isPreview": false
      }
      this.agentService.QualityControlVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    } else if (this.qualityControlDetail.checkedTwo === true) {
      let payload = {
        "_id": this.qualityControlDetail._id,
        "isVerify": false,
        "isPreview": true
      }
      this.agentService.QualityControlVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    }
  }

  researchDevelopmentVerify(): void {
    if (this.researchDevelopmentDetail.checkedOne === true) {
      let payload = {
        "_id": this.researchDevelopmentDetail._id,
        "isVerify": true,
        "isPreview": false
      }
      this.agentService.ResearchDevelopmentVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    } else if (this.researchDevelopmentDetail.checkedTwo === true) {
      let payload = {
        "_id": this.researchDevelopmentDetail._id,
        "isVerify": false,
        "isPreview": true
      }
      this.agentService.ResearchDevelopmentVerify(payload).subscribe(
        (response) => {

        }, (error) => {
          console.log('err', error);
        }
      )
    }
  }

  productVerify(): void {
    this.productCheckList.forEach((element) => {
      if (element.checkedTwo === true) {
        this.productPayload._id = element._id;
        this.productPayload.isPreview = true;
        this.formProductService.updateVerifyProduct(this.productPayload).subscribe(
          (res) => {
          }, (err) => {
            console.log('err', err);
          }
        )
      } else if (element.checkedOne === true) {
        this.productPayload._id = element._id;
        this.productPayload.isVerify = true;
        this.formProductService.updateVerifyProduct(this.productPayload).subscribe(
          (res) => {
          }, (err) => {
            console.log('err', err);
          }
        )
      }
    })
  }

  onSubmit(): void {
    this.sellerTypeVerify();
    this.companyDetailVerify();
    this.companyProfileVerify();
    this.exportCapibilityVerify();
    this.certificateVerify();
    this.qualityControlVerify();
    this.researchDevelopmentVerify();
    this.productVerify();
    let payload: any;
    if ((this.sellerTypeDetail.checkedOne === true && this.companyDetail.checkedOne === true && this.companyProfileDetail.checkedOne === true && this.exportCapibilityDetail.checkedOne === true) && (this.certificateDetail.checkedOne === true && this.qualityControlDetail.checkedOne === true && this.researchDevelopmentDetail.checkedOne === true)) {
      payload = {
        "_id": this.agentId,
        "isVerify": true,
        "isPreview": false
      }
      this.agentService.agentVerify(payload).subscribe(
        (response) => {
          this.router.navigateByUrl('/agent/assign-account/assign-account-list');
        }, (error) => {
          console.log('error', error);
        }
      )
    } else if ((this.sellerTypeDetail.checkedTwo === true && this.companyDetail.checkedTwo === true && this.companyProfileDetail.checkedTwo === true && this.exportCapibilityDetail.checkedTwo === true) && (this.certificateDetail.checkedTwo === true && this.qualityControlDetail.checkedTwo === true && this.researchDevelopmentDetail.checkedTwo === true)) {
      payload = {
        "_id": this.agentId,
        "isVerify": false,
        "isPreview": true
      }
      this.agentService.agentVerify(payload).subscribe(
        (response) => {
          this.router.navigateByUrl('/agent/assign-account/assign-account-list');
        }, (error) => {
          console.log('error', error);
        }
      )
    }
  }
}
