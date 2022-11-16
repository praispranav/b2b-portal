import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderUserAuthService } from "./../../../core/providers/auth/provider-user-auth.service";
import { Router } from '@angular/router';
import { MessageService } from "../../../@pages/components/message/message.service";
import { AppMessageService } from "../../../core/services/app-message.service";
import { ProviderMaterCountryService } from "../../../core/providers/master/provider-mater-country.service";
import { ProviderMaterStateService } from "../../../core/providers/master/provider-mater-state.service";
import { ProviderMaterLocationService } from "../../../core/providers/master/provider-mater-location.service";


@Component({
  selector: "app-page-sign-up",
  templateUrl: "./page-sign-up.component.html",
  styleUrls: ["./page-sign-up.component.scss"],
})
export class PageSignUpComponent implements OnInit {
  signUpForm: FormGroup;
  selectedOption;
  // options = [
  //   { value: 'India', label: 'India' },
  //   { value: 'Malaysia', label: 'Malaysia' },
  //   { value: 'Pakistan', label: 'Pakistan' }
  // ];
  codes = [
    { value: '+91', label: '+91' },
    { value: '+65', label: '+65' },
    { value: '+11', label: '+11' }
  ];


  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private providerUserAuthService: ProviderUserAuthService,
    private messageService: MessageService,
    private appMessageService: AppMessageService,
    private providerMaterCountryService: ProviderMaterCountryService,
    private providerMaterStateService: ProviderMaterStateService,
    private providerMaterLocationService: ProviderMaterLocationService
  ) { }

  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    this.buildSignUpForm();
    this.getCountryList();
  }

  
getCountryList(){
  this.providerMaterCountryService.getMaterCountryList().subscribe(
    (res: any) => {

      this.countries = res.data;
      console.log('country', this.countries)
    },
    (err) => {
      console.log(err)
    }
  );
}
  onCountrySelected(e) {
    console.log("" + e.target.value);
    this.f.regCountry.setValue(e.target.value);
    this.f.facCountry.setValue(e.target.value);
  
    this.providerMaterStateService.getMaterStateListAll(e.target.value).subscribe(
      (res: any) => {
        this.states = res.data[0].states;
        console.log('state', this.states)
      },
      (err) => {
        console.log(err)
      }
    );
  }

  onStateSelected(e) {
    console.log("" + e.target.value);
    this.f.regState.setValue(e.target.value);

    this.f.facState.setValue(e.target.value);
    this.providerMaterLocationService.getMaterLocationListAll(e.target.value).subscribe(
      (res: any) => {
        this.cities = res.data[0].cities;
        console.log('cities', this.cities)
      },
      (err) => {
        console.log(err)
      }
    );
  }

  onCitySelected(e) {
    console.log("" + e.target.value);
    this.f.regCity.setValue(e.target.value);
  }

  buildSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      company: ["", [Validators.required]],
      fName: ["", [Validators.required]],
      lName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      code: [""],
      password: ["", [Validators.required]],
      cpassword: ["", [Validators.required]],
      country: ["", [Validators.required],],
      address1: ["", [Validators.required]],
      city: [""],
      role: ["", [Validators.required]],
      checkAggriment:["", [Validators.required]]
    });
  }

  subSignUpForm() {
    const params = this.signUpForm.value;
    params.role = params.role === 'buyer' ? 'buyer' : params.role === 'seller' ? 'seller' : 'buyer-seller';
    this.providerUserAuthService.userSignUp(params).subscribe(res => {
      if (res.header.code === 200) {
        this.router.navigateByUrl('/b2b/active-account');
        this.appMessageService.createBasicNotification('green', res.header.message);
      } else {
        this.appMessageService.createBasicNotification('blue', res.header.message);
      }
    }, err => {
      this.appMessageService.createBasicNotification('red', 'Something went wrong');
    });
  }
}
