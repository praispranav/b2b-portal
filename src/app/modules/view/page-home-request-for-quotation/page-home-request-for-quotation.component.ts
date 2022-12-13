import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RequestQuotationService } from "../../../core/providers/user/request-quotation.service";
import { Router } from "@angular/router";
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
    private requestQuotationService: RequestQuotationService
  ) {}
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
    // this.getDetailById(item);
    // this.payload = {
    //   // quantity: this.quantity,
    //   ...this.requestQuotationForm1.value,

    // };
    let formData = this.requestQuotationForm1.value;
    // let data = {
    //   formData: formData,
    //   // value: 'first'
    // }

    this.formSubmitData.emit(formData);
    this.requestQuotationService.setRequestForQuotationLocal(this.requestQuotationForm1.value)
    this.router.navigateByUrl(`/b2b/request-for-quotation`);

    // console.log("payload", this.payload);
    // this.requestQuotationService.addRequestForQuotation(this.payload).subscribe(
    //   (res) => {
    //     window.alert('API Success');
    //     // this.router.navigateByUrl(`/seller/category/category-add/${item['_id']}`);
    //     console.log("res", res);
    //   },
    //   (err) => {

    //     window.alert('API Error');
    //   }
    // );
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
