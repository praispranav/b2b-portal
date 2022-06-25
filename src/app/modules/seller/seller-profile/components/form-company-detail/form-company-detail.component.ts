import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderCompanyDetailService } from "../../../../../core/providers/seller/provider-company-detail.service";

@Component({
  selector: "app-form-company-detail",
  templateUrl: "./form-company-detail.component.html",
  styleUrls: ["./form-company-detail.component.scss"],
})
export class FormCompanyDetailComponent implements OnInit {
  companyDetailsForm: FormGroup;
  designationList: any[] = [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "tom", label: "Tom" },
  ];

  constructor(private formBuilder: FormBuilder, private providerCompanyDetailService: ProviderCompanyDetailService) { }

  get f() {
    return this.companyDetailsForm.controls;
  }

  ngOnInit() {
    this.buildCompanyDetailsForm();
  }

  buildCompanyDetailsForm() {
    this.companyDetailsForm = this.formBuilder.group({
      companyLogo: ["", [Validators.required]],
      companyPicture: ["", [Validators.required]],
      companyVideo: ["", [Validators.required]],
      contactPerson: ["", [Validators.required]],
      contactName: ["", [Validators.required]],
      contactSurname: ["", [Validators.required]],
      contactEmail: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      alternativeEmail: ["", [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      designation: ["", [Validators.required]],
      companyWebsite: ["", [Validators.required]],
      googleBusiness: ["", [Validators.required]],
      facebookBusiness: ["", [Validators.required]],
      instagramBusiness: ["", [Validators.required]],
      companyPage: ["", [Validators.required]],
      accountNumber: ["", [Validators.required]],
      accountType: ["", [Validators.required]],
      ifscCode: ["", [Validators.required]],
      swiftCode: ["", [Validators.required]],
      branch: ["", [Validators.required]],
      bankName: ["", [Validators.required]],
      languageSpoken: ["", [Validators.required]],
      companyPhilosophy: ["", [Validators.required]],
      companyVision: ["", [Validators.required]],
      companyDetail: ["", [Validators.required]],
      strength: ["", [Validators.required]],
      selectYes: ["", [Validators.required]],
      selectNo: ["", [Validators.required]],
      tradeShow: [""],
      date: [""],
      host: [""],
      region: [""],
      tradeCity: [""],
      aboutShow: [""],
      uploadPicture: [""],
    });
  }

  async subCompanyDetailForm() {


    this.providerCompanyDetailService.addCompanyDetail(this.companyDetailsForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.companyDetailsForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }

  async toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  private resetFormGroup(form: FormGroup) {
    form.reset();
  }

}
