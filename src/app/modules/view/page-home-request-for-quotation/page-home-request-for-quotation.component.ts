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
  file: File;
  fileType: any | string;
  fileName: string = '';
  imageBase64: string | any = "";
  requestQuotationForm1: FormGroup;
  requestQuotationForm2: FormGroup;
  payload: any = {};
  ShowSecondSection: boolean = false;

  quantity: any;

  constructor(private formBuilder: FormBuilder,
    private requestQuotationService: RequestQuotationService) { }

  handleQuantityChange(event) {
    this.quantity = event.target.value;
    console.log("quantity value", this.quantity)
  }
  get f1() {
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
      lookingFor: ["", [Validators.required, Validators.maxLength(200)]],
      pieces: ["", [Validators.required, Validators.maxLength(10)]],
    });
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
      isCheck: ["",],
    });
  }
  async subRequestForm1() {
    let formData1 = this.requestQuotationForm1.value;
    console.log("formData1", formData1);
  }
  saveFormData() {
    this.payload = {
      quantity: this.quantity,
      ...this.requestQuotationForm1.value,
      ...this.requestQuotationForm2.value,

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
  fileUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageBase64 = reader.result;
      this.requestQuotationForm2.patchValue({ imageUrl: reader.result as string })
      this.fileType = file.type;
      this.fileName = file.name
    }
  }
  showDetailsForm() {
    this.ShowSecondSection = true;
  }

}
