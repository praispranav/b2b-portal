import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-page-company-add',
  templateUrl: './page-company-add.component.html',
  styleUrls: ['./page-company-add.component.scss'],
})
export class PageCompanyAddComponent implements OnInit {
  @ViewChild('tabset') tabset!: TabsetComponent;
  @ViewChild('first') first!: TabDirective;
  @ViewChild('second') second!: TabDirective;
  disableSwitching!: boolean;
  mainProducts: any[] = [];
  companyProfileMobile: any[] = [];
  companyProfileLandline: any[] = [];
  profileRegCertificate: any[] = [];
  companyPicture: any[] = [];
  companyVideo: any[] = [];
  languageSpoken: any[] = [];
  tradeName: any[] = [];
  uploadPicture: any[] = [];
  additionalTradeExpoArray!: FormArray;
  additionalDetailsArray!: FormArray;
  randdAddtionalFieldArray!: FormArray;
  qualityControlArray!: FormArray;
  otherCertifications: any[] = [];

  constructor(private formBuilder: FormBuilder) {}

  //Export Capabilities Validation
  exportCapabilitiesForm = this.formBuilder.group({
    yearlyTurnOver: ['', Validators.required],
    nearestPort: ['', Validators.required],
  });

  get yearlyTurnOver() {
    return this.exportCapabilitiesForm.get('yearlyTurnOver');
  }
  get nearestPort() {
    return this.exportCapabilitiesForm.get('nearestPort');
  }

  exportSubmit() {
    console.log(this.exportCapabilitiesForm.value);
  }

  //certificate center Validation
  certificateCenterForm = new FormGroup({
    otherCertifications: new FormControl(''),
  });
  addOtherCertifications() {
    if (this.otherCertifications.length == 3) return;

    const value = this.certificateCenterForm.value.otherCertifications;
    this.otherCertifications.push(value);
    this.certificateCenterForm.patchValue({ otherCertifications: '' });
  }

  // company profile validation
  companyProfileForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    pan: new FormControl('', Validators.required),
    tan: new FormControl('', Validators.required),
    gst: new FormControl('', Validators.required),
    iec: new FormControl('', Validators.required),
    estDate: new FormControl('', Validators.required),
    mainCategory: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    addr: new FormControl('', Validators.required),
    division: new FormControl(''),

    factory: new FormControl(''),

    annualTurn: new FormControl(''),
    contPerson: new FormControl(''),
    phn: new FormControl(''),
    mob: new FormControl(''),
    email: new FormControl(''),
    mainCat: new FormControl('', Validators.required),
    area: new FormControl(''),
    mainProducts: new FormControl(''),
    companyProfileMobile: new FormControl(''),
    companyProfileLandline: new FormControl(''),
    profileRegCertificate: new FormControl(''),
    additionalDetailsArray: new FormArray([]),
  });
  get companyName() {
    return this.companyProfileForm.get('companyName');
  }
  get pan() {
    return this.companyProfileForm.get('pan');
  }
  get tan() {
    return this.companyProfileForm.get('tan');
  }
  get gst() {
    return this.companyProfileForm.get('gst');
  }
  get iec() {
    return this.companyProfileForm.get('iec');
  }
  get estDate() {
    return this.companyProfileForm.get('estDate');
  }
  get mainCat() {
    return this.companyProfileForm.get('mainCat');
  }
  get mainCategory() {
    return this.companyProfileForm.get('mainCategory');
  }
  get country() {
    return this.companyProfileForm.get('country');
  }
  get state() {
    return this.companyProfileForm.get('state');
  }
  get city() {
    return this.companyProfileForm.get('city');
  }
  get addr() {
    return this.companyProfileForm.get('addr');
  }
  get division() {
    return this.companyProfileForm.get('division');
  }
  get area() {
    return this.companyProfileForm.get('area');
  }

  get factory() {
    return this.companyProfileForm.get('factory');
  }

  get annualTurn() {
    return this.companyProfileForm.get('annualTurn');
  }
  get contPerson() {
    return this.companyProfileForm.get('contPerson');
  }
  get phn() {
    return this.companyProfileForm.get('phn');
  }
  get mob() {
    return this.companyProfileForm.get('mob');
  }
  get email() {
    return this.companyProfileForm.get('email');
  }
  // get mainProductsProfile() { return this.companyProfileForm.get('mainProducts'); }

  //company details validation
  companyDetailsForm = new FormGroup({
    companyPicture: new FormControl(''),
    companyVideo: new FormControl('', Validators.required),
    companyLogo: new FormControl('', Validators.required),

    languageSpoken: new FormControl(''),

    uploadPicture: new FormControl(''),
    contactPerson: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    companyWebsite: new FormControl('', Validators.required),
    companyPage: new FormControl('', Validators.required),
    emailDetails: new FormControl('', [Validators.required, Validators.email]),
    alternativeEmail: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    companyNameDetails: new FormControl('', Validators.required),
    accountNumber: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
    ifscCode: new FormControl('', Validators.required),
    swiftCode: new FormControl('', Validators.required),
    bankName: new FormControl('', Validators.required),
    branchDetails: new FormControl('', Validators.required),
    companyPhilosophy: new FormControl('', Validators.required),
    companyMissionAndVision: new FormControl('', Validators.required),
    companyDetailedInstruction: new FormControl('', Validators.required),
    selectTradeShow: new FormControl('', Validators.required),
    tradeShowName: new FormControl('', Validators.required),
    dateFrom: new FormControl('', Validators.required),
    dateTo: new FormControl('', Validators.required),
    host: new FormControl('', Validators.required),
    countryDetails: new FormControl('', Validators.required),
    cityDetails: new FormControl('', Validators.required),
    aboutTradeShow: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    employeeStrength: new FormControl('', Validators.required),
    additionalTradeExpoArray: new FormArray([]),
  });

  get contactPerson() {
    return this.companyDetailsForm.get('contactPerson');
  }
  get name() {
    return this.companyDetailsForm.get('name');
  }
  get surname() {
    return this.companyDetailsForm.get('surname');
  }
  get companyWebsite() {
    return this.companyDetailsForm.get('companyWebsite');
  }
  get companyPage() {
    return this.companyDetailsForm.get('companyPage');
  }
  get emailDetails() {
    return this.companyDetailsForm.get('emailDetails');
  }
  get alternativeEmail() {
    return this.companyDetailsForm.get('alternativeEmail');
  }
  get companyNameDetails() {
    return this.companyDetailsForm.get('companyNameDetails');
  }
  get accountNumber() {
    return this.companyDetailsForm.get('accountNumber');
  }
  get accountType() {
    return this.companyDetailsForm.get('accountType');
  }
  get ifscCode() {
    return this.companyDetailsForm.get('ifscCode');
  }
  get swiftCode() {
    return this.companyDetailsForm.get('swiftCode');
  }
  get bankName() {
    return this.companyDetailsForm.get('bankName');
  }
  get branchDetails() {
    return this.companyDetailsForm.get('branchDetails');
  }
  get companyPhilosophy() {
    return this.companyDetailsForm.get('companyPhilosophy');
  }
  get companyMissionAndVision() {
    return this.companyDetailsForm.get('companyMissionAndVision');
  }
  get companyDetailedInstruction() {
    return this.companyDetailsForm.get('companyDetailedInstruction');
  }
  get selectTradeShow() {
    return this.companyDetailsForm.get('selectTradeShow');
  }
  get tradeShowName() {
    return this.companyDetailsForm.get('tradeShowName');
  }
  get dateFrom() {
    return this.companyDetailsForm.get('dateFrom');
  }
  get dateTo() {
    return this.companyDetailsForm.get('dateTo');
  }
  get host() {
    return this.companyDetailsForm.get('host');
  }
  get countryDetails() {
    return this.companyDetailsForm.get('countryDetails');
  }
  get cityDetails() {
    return this.companyDetailsForm.get('cityDetails');
  }
  get aboutTradeShow() {
    return this.companyDetailsForm.get('aboutTradeShow');
  }
  get designation() {
    return this.companyDetailsForm.get('designation');
  }
  get employeeStrength() {
    return this.companyDetailsForm.get('employeeStrength');
  }
  get companyLogo() {
    return this.companyDetailsForm.get('companyLogo');
  }

  // Ouality-Control Validation
  qualityControlForm = new FormGroup({
    processName: new FormControl(''),
    picture: new FormControl(''),
    qualitydescription: new FormControl(''),
    qualityControlArray: new FormArray([]),
  });
  get processName() {
    return this.qualityControlForm.get('processName');
  }
  get picture() {
    return this.qualityControlForm.get('picture');
  }
  get qualitydescription() {
    return this.qualityControlForm.get('qualitydescription');
  }

  // R&D validation

  randdForm = new FormGroup({
    certificateName: new FormControl(''),
    certifiedBy: new FormControl(''),
    businessScope: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    randdAddtionalFieldArray: new FormArray([]),
  });
  get certificateName() {
    return this.randdForm.get('certificateName');
  }
  get certifiedBy() {
    return this.randdForm.get('certifiedBy');
  }
  get businessScope() {
    return this.randdForm.get('businessScope');
  }
  get fromDate() {
    return this.randdForm.get('fromDate');
  }
  get toDate() {
    return this.randdForm.get('toDate');
  }

  ngOnInit(): void {
    this.additionalTradeExpoArray = this.companyDetailsForm.get(
      'additionalTradeExpoArray'
    ) as FormArray;
    this.additionalDetailsArray = this.companyProfileForm.get(
      'additionalDetailsArray'
    ) as FormArray;

    this.randdAddtionalFieldArray = this.randdForm.get(
      'randdAddtionalFieldArray'
    ) as FormArray;
    this.qualityControlArray = this.qualityControlForm.get(
      'qualityControlArray'
    ) as FormArray;
  }
  ngAfterViewInit() {
    this.addqualityControlField();
    this.addranddField();
    this.addAditionalDetails();
    this.addAdditionalTradeExpo();
  }

  // company prrofile  function
  addMainProducts() {
    if (this.mainProducts.length == 3) return;

    const value = this.companyProfileForm.value.mainProducts;
    this.mainProducts.push(value);
    this.companyProfileForm.patchValue({ mainProducts: '' });
  }

  addProfileMobileNumber() {
    if (this.companyProfileMobile.length == 3) return;
    const value = this.companyProfileForm.value.companyProfileMobile;
    this.companyProfileMobile.push(value);
    this.companyProfileForm.patchValue({ companyProfileMobile: '' });
  }
  addcompanyProfileLandline() {
    if (this.companyProfileLandline.length == 3) return;
    const value = this.companyProfileForm.value.companyProfileLandline;
    this.companyProfileLandline.push(value);
    this.companyProfileForm.patchValue({ companyProfileLandline: '' });
  }

  addprofileRegCertificate() {
    if (this.profileRegCertificate.length == 3) return;
    const value = this.companyProfileForm.value.profileRegCertificate;
    this.profileRegCertificate.push(value);
    this.companyProfileForm.patchValue({ profileRegCertificate: '' });
  }
  createqualityControlField(): FormGroup {
    return this.formBuilder.group({
      processName: ['', Validators.required],
      picture: ['', Validators.required],
      qualitydescription: ['', Validators.required],
    });
  }
  addqualityControlField(): void {
    this.qualityControlArray.push(this.createqualityControlField());
  }

  submitCompanyProfileForm() {
    const obj = {
      ...this.companyProfileForm.value,
      companyProfileMobile: this.companyProfileMobile,
      companyProfileLandline: this.companyProfileLandline,
      profileRegCertificate: this.profileRegCertificate,
    };

    console.log(obj);
  }

  // company detail  function

  addCompanyPicture() {
    if (this.companyPicture.length == 3) return;

    const value = this.companyDetailsForm.value.companyPicture;
    this.companyPicture.push(value);
    this.companyDetailsForm.patchValue({ companyPicture: '' });
  }

  addLanguageSpoken() {
    if (this.languageSpoken.length == 3) return;

    const value = this.companyDetailsForm.value.languageSpoken;
    this.languageSpoken.push(value);
    this.companyDetailsForm.patchValue({ languageSpoken: '' });
  }
  addTradeName() {
    if (this.tradeName.length == 3) return;

    const value = this.companyDetailsForm.value.tradeName;
    this.tradeName.push(value);
    this.companyDetailsForm.patchValue({ tradeName: '' });
  }
  addCompanyVideo() {
    if (this.companyVideo.length == 3) return;

    const value = this.companyDetailsForm.value.companyVideo;

    this.companyVideo.push(value);
    this.companyDetailsForm.patchValue({ companyVideo: '' });
  }
  addUploadPicture() {
    if (this.uploadPicture.length == 3) return;

    const value = this.companyDetailsForm.value.uploadPicture;
    console.log(value);
    this.uploadPicture.push(value);
    this.companyDetailsForm.patchValue({ uploadPicture: '' });
  }
  onChangeTradeName(changeEvent: any, index: number) {
    // const addValue = [ ...this.additionalTradeExpoArray.at(index).value,  ]
    //   this.additionalTradeExpoArray.at(index).patchValue({  })
  }
  detailsSubmitForm() {
    console.log(this.companyDetailsForm.value);
  }

  // Quality control submit function
  createAditionalDetails(): FormGroup {
    return this.formBuilder.group({
      division: ['', Validators.required],
      area: ['', Validators.required],
      factory: ['', Validators.required],
      country: ['', Validators.required],
      phn: ['', Validators.required],
      mob: ['', Validators.required],
      annualTurn: ['', Validators.required],
      contPerson: ['', Validators.required],
    });
  }
  //details
  createAdditionalTradeExpo(): FormGroup {
    return this.formBuilder.group({
      selectTradeShow: ['', Validators.required],
      tradeName: [[], Validators.required],
      tradeShowName: ['', Validators.required],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      host: ['', Validators.required],
      countryDetails: ['', Validators.required],
      cityDetails: ['', Validators.required],
      uploadPicture: ['', Validators.required],
    });
  }
  addAditionalDetails(): void {
    this.additionalDetailsArray.push(this.createAditionalDetails());
  }
  addAdditionalTradeExpo(): void {
    this.additionalTradeExpoArray.push(this.createAdditionalTradeExpo());
  }
  submitqualityControlForm() {
    console.log(this.qualityControlForm.value);
  }

  // r&d submit function
  createranddArray(): FormGroup {
    return this.formBuilder.group({
      certificateName: ['', Validators.required],
      certifiedBy: ['', Validators.required],
      businessScope: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
    });
  }
  addranddField(): void {
    this.randdAddtionalFieldArray.push(this.createranddArray());
  }

  submitranddForm() {
    console.log(this.randdForm.value);
  }

  confirmTabSwitch($event: any) {
    if (this.disableSwitching) {
      const confirm = window.confirm('Discard changes and switch tab?');
      if (confirm) {
        this.disableSwitching = false;
        this.second.active = true;
      }
    }
  }
}
