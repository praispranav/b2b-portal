import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { FormProductService } from '../../../../core/providers/user/form-product.service';

@Component({
  selector: 'app-assign-account-details',
  templateUrl: './assign-account-details.component.html',
  styleUrls: ['./assign-account-details.component.scss']
})
export class AssignAccountDetailsComponent implements OnInit {
  sellerList: any[] = [];
  sellerId: string;
  agentId: string;
  productList: any[] = [];
  profileDetails: any;
  productPayload = {
    "_id": '',
    "isVerify": false,
    "isPreview": false
  };
  productCheckList: any[] = [];
  // formGroup: FormGroup;
  baseUrl = environment.imageStorage;
  constructor(
    private formProductService: FormProductService,
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
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
      } catch (error) {
        console.log('error', error);
      }
    })
  }

  // buildForm(): void {
  //   this.formGroup = this.formBuilder.group({
  //     profile: this.formBuilder.array([]),
  //     productDetails: this.formBuilder.array([])
  //   });
  //   this.addprofile({});
  //   this.addProductDetails({});
  // }

  // get profile(): FormArray {
  //   return this.formGroup.get('profile') as FormArray
  // }

  // get productDetails(): FormArray {
  //   return this.formGroup.get('productDetails') as FormArray
  // }

  // addprofile(data): void {
  //   if (data.length > 0) {
  //     while (this.profile.controls.length !== 0) {
  //       this.profile.removeAt(0);
  //     }
  //   }
  //   this.profileList.forEach((element) => {
  //     console.log(data.length > 0 && data.indexOf(element) > -1 ? element : '');
  //     this.profile.push(
  //       this.formBuilder.group({
  //         profiles: [data.length > 0 && data.indexOf(element) > -1 ? element : false]
  //       })
  //     )
  //   })
  //   console.log('addProfile', this.profile);

  // }

  // addProductDetails(data): void {
  //   if (data.length > 0) {
  //     while (this.productDetails.controls.length !== 0) {
  //       this.productDetails.removeAt(0);
  //     }
  //   }
  //   this.productList.forEach((element) => {
  //     console.log(data.length > 0 && data.indexOf(element) > -1 ? element : '');
  //     this.productDetails.push(
  //       this.formBuilder.group({
  //         products: [data.length > 0 && data.indexOf(element) > -1 ? element : false]
  //       })
  //     )
  //   })
  //   console.log('addProductDetails', this.productDetails);
  // }

  getAllProducts(): void {
    let payload = {
      "page": 1,
      "pageSize": 1000,
      "searchText": '',
      "userId": this.sellerId
    }
    this.formProductService.getProductBySeller(payload).subscribe((res) => {
      this.productList = res.data;
      this.productList.forEach((element) => {
        if (element.isVerify === true) {
          element.checkedOne = true;
        } else if (element.isPreview === true) {
          element.checkedTwo = true;
        }
      })
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

  onProfileRadioClick(event): void {
    if (event.target.value === 'Verify') {
      this.profileDetails.checkedOne = true;
      this.profileDetails.checkedTwo = false;
    } else {
      this.profileDetails.checkedOne = false;
      this.profileDetails.checkedTwo = true;
    }
  }

  onSubmit(): void {
    this.productCheckList.forEach((element) => {
      if (element.checkedTwo === true) {
        this.productPayload._id = element._id;
        this.productPayload.isPreview = true;
        this.formProductService.updateVerifyProduct(this.productPayload).subscribe((res) => {
          console.log('res', res);
          this.router.navigateByUrl('/agent/assign-account/assign-account-list');
        }, (err) => {
          console.log('err', err);
        }
        )
      } else if (element.checkedOne === true) {
        this.productPayload._id = element._id;
        this.productPayload.isVerify = true;
        this.formProductService.updateVerifyProduct(this.productPayload).subscribe((res) => {
          console.log('res', res);
          this.router.navigateByUrl('/agent/assign-account/assign-account-list');
        }, (err) => {
          console.log('err', err);
        }
        )
      }
    })
    
  }

}
