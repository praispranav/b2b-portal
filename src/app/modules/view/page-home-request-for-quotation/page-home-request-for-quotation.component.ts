import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestQuotationService } from '../../../core/providers/user/request-quotation.service';

@Component({
  selector: 'app-page-home-request-for-quotation',
  templateUrl: './page-home-request-for-quotation.component.html',
  styleUrls: ['./page-home-request-for-quotation.component.scss']
})
export class PageHomeRequestForQuotationComponent implements OnInit {
  handlePreview: any;
  requestQuotationForm1: FormGroup;
  requestQuotationForm2: FormGroup;
  allFormData: any;
  firstFormValue: any;
  secondFormValue: any;
  payload: any = {};

  constructor(private formBuilder: FormBuilder,
    private requestQuotationService: RequestQuotationService) { }
  @Output() formSubmitData1: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmitData2: EventEmitter<any> = new EventEmitter<any>();

  get f() {
    return this.requestQuotationForm1.controls;
  }
  get f2() {
    return this.requestQuotationForm2.controls;

  }
  ngOnInit() {
    this.buildTypeForm1();
    this.buildTypeForm2();

  }
  buildTypeForm1() {
    this.requestQuotationForm1 = this.formBuilder.group({
      lookingFor: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      pieces: ["", [Validators.required, Validators.maxLength(10)]],
    });
  }

  buildTypeForm2() {
    this.requestQuotationForm2 = this.formBuilder.group({
      productName: ["", [Validators.required]],
      productCategory: ["", [Validators.required]],
      unit: ["", [Validators.required]],
      sourcingType: ["", [Validators.required]],
      sourcingPurpose: ["", [Validators.required]],
      budget: ["", [Validators.required]],
      currency: ["", [Validators.required]],
      image: ["", [Validators.required]],
      shipIn: ["", [Validators.required]],
      isCheck: ["", [Validators.required]],
    });
  }
  async subRequestForm1() {
    let formData1 = this.requestQuotationForm1.value;
    console.log("formData1", formData1);
    let data = {
      formData1: formData1,
      value: 'first'
    }
    this.formSubmitData1.emit(data);
  }
  async subRequestForm2() {
    let formData2 = this.requestQuotationForm2.value;
    console.log("formData2", formData2);
    let data = {
      formData2: formData2,
      value: 'second'
    }
    this.formSubmitData2.emit(data);
  }
  saveFormData(event): void {
    console.log("event", event);
    if (event) {
      this.allFormData = event.formData;
      if (event.value === "first") {
        this.firstFormValue = {
          lookingFor: this.allFormData.lookingFor ? this.allFormData.lookingFor : "",
          quantity: this.allFormData.quantity ? this.allFormData.quantity : "",
          pieces: this.allFormData.pieces ? this.allFormData.pieces : "",

        };
      }
      if (event.value === "second") {
        this.secondFormValue = {
          productName: this.allFormData.productName ? this.allFormData.productName : '',
          productCategory: this.allFormData.productCategory ? this.allFormData.productCategory : '',
          unit: this.allFormData.unit ? this.allFormData.unit : '',
          sourcingType: this.allFormData.sourcingType ? this.allFormData.sourcingType : '',
          sourcingPurpose: this.allFormData.sourcingPurpose ? this.allFormData.sourcingPurpose : '',
          budget: this.allFormData.budget ? this.allFormData.budget : '',
          currency: this.allFormData.currency ? this.allFormData.currency : '',
          image: this.allFormData.image ? this.allFormData.image : '',
          shipIn: this.allFormData.shipIn ? this.allFormData.shipIn : '',
          isCheck: this.allFormData.isCheck ? this.allFormData.isCheck : ''
        };
        this.payload = {
          ...this.firstFormValue,
          ...this.secondFormValue,

        };
        console.log("payload", this.payload);
        this.requestQuotationService.addRequestForQuotation(this.payload).subscribe(
          (res) => {
            window.alert('API Success');
            console.log("res", res);
          },
          (err) => {

            window.alert('API Error');
          }
        );
      }

    }
  }
}
