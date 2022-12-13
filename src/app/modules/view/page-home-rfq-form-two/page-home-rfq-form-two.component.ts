import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  ReqQuoFormData,
  RequestQuotationService,
} from "../../../core/providers/user/request-quotation.service";
@Component({
  selector: "app-page-home-rfq-form-two",
  templateUrl: "./page-home-rfq-form-two.component.html",
  styleUrls: ["./page-home-rfq-form-two.component.scss"],
})
export class PageHomeRfqFormTwoComponent implements OnInit {
  handlePreview: any;
  file: File;
  fileType: any | string;
  fileName: string = "";
  imageBase64: string | any = "";
  requestQuotationForm2: FormGroup;
  firstFormValue: any;
  payload: any = {};
  ShowSecondSection: boolean = false;
  ShowSecondOne: boolean = true;
  rfqId: string = "";
  quote: any = {};
  allFormData: any;

  rfqSmallFormData: ReqQuoFormData =
    this.requestQuotationService.getRequestForQuotationLocal();

  constructor(
    private formBuilder: FormBuilder,
    private requestQuotationService: RequestQuotationService
  ) {}

  ngOnInit() {
    this.buildTypeForm2();
    this.rfqId = JSON.parse(localStorage.getItem("rfqId"));
    // this.requestQuotationService
    //   .getRequestForQuotationById(this.rfqId)
    //   .subscribe(
    //     (res: any) => {
    //       this.quote = res;
    //     },
    //     (err) => {}
    //   );
  }

  buildTypeForm2() {
    this.requestQuotationForm2 = this.formBuilder.group({
      productName: ["", [Validators.required, Validators.maxLength(200)]],
      productCategory: ["", [Validators.required]],
      unit: ["", [Validators.required]],
      sourcingType: ["", [Validators.required]],
      sourcingPurpose: ["", [Validators.required]],
      budget: ["", [Validators.required, Validators.maxLength(50)]],
      details: ["", [Validators.required, Validators.maxLength(200)]],
      currency: ["", [Validators.required]],
      image: ["", [Validators.required]],
      shipIn: ["", [Validators.required, Validators.maxLength(20)]],
      isCheck: [""],
      quantity: ["", Validators.required],
    });
    this.requestQuotationForm2.patchValue({
      ...this.rfqSmallFormData,
    });
  }

  saveFormData(event): void {
    if (event) {
      this.allFormData = event.formData;
      this.firstFormValue = {
        productName: this.allFormData.productName
          ? this.allFormData.productName
          : "",
        quantity: this.allFormData.quantity ? this.allFormData.quantity : "",
        unit: this.allFormData.unit ? this.allFormData.unit : "",
      };
    }
    this.payload = {
      ...this.requestQuotationForm2.value,
    };
    debugger;
    console.log("payload", this.payload);
    this.requestQuotationService.addRequestForQuotation(this.payload).subscribe(
      (res) => {
        window.alert("API Success");
        console.log("res", res);
      },
      (err) => {
        window.alert("API Error");
      }
    );
  }
  fileUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageBase64 = reader.result;
      this.requestQuotationForm2.patchValue({
        imageUrl: reader.result as string,
      });
      this.fileType = file.type;
      this.fileName = file.name;
    };
  }
  // showDetailsForm() {
  //   this.ShowSecondSection = true;
  //   this.ShowSecondOne = false;
  // }
}
