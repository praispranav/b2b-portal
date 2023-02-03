import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestQuotationService } from "../../../core/providers/user/request-quotation.service";
import { Router } from "@angular/router";
import { ProviderUserAuthService } from "../../../core/providers/auth/provider-user-auth.service";
@Component({
  selector: "app-page-home-request-for-quotation",
  templateUrl: "./page-home-request-for-quotation.component.html",
  styleUrls: ["./page-home-request-for-quotation.component.scss"],
})
export class PageHomeRequestForQuotationComponent implements OnInit {
  handlePreview: any;
  file: File;
  fileType: any | string;
  fileName: string = "";
  imageBase64: string | any = "";
  requestQuotationForm1: FormGroup;
  requestQuotationForm2: FormGroup;
  payload: any = {};
  ShowSecondSection: boolean = false;
  ShowSecondOne: boolean = true;
  // quantity: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private requestQuotationService: RequestQuotationService,
    private authService:ProviderUserAuthService
  ) {

  }
  @Output() formSubmitData: EventEmitter<any> = new EventEmitter<any>();

  // handleQuantityChange(event) {
  //   this.quantity = event.target.value;
  //   console.log("quantity value", this.quantity)
  // }
  get f1() {
    return this.requestQuotationForm1.controls;
  }

  ngOnInit() {
    this.buildTypeForm1();
  }
  buildTypeForm1() {
    this.requestQuotationForm1 = this.formBuilder.group({
      productName: ["", [Validators.required, Validators.maxLength(200)]],
      quantity: ["", [Validators.required, Validators.maxLength(10)]],
      unit: ["", [Validators.required, Validators.maxLength(10)]],
    });
  }

  subRequestForm1() {
    let formData = this.requestQuotationForm1.value;

    this.formSubmitData.emit(formData);
    this.requestQuotationService.setRequestForQuotationLocal(this.requestQuotationForm1.value)
    const jwt_decode = this.authService.currentUserValueObjTokenDecoded
    console.log("JwtDecode", jwt_decode);
    if(jwt_decode){
      this.router.navigateByUrl(`/b2b/request-for-quotation`);
    } else {
      this.router.navigateByUrl('user-auth/sign-in')
    }
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

  getDetailById(item: any) {
    // localStorage.setItem("rfqId", JSON.stringify(item._id));
  }
}
