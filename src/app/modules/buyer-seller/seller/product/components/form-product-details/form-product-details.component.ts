import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderProductDetailService } from "../../../../../../core/providers/user/provider-product-detail.service";
export type subProductDetails = { productVideoLink: string, image: string,productDescription:string };

@Component({
  selector: "app-form-product-details",
  templateUrl: "./form-product-details.component.html",
  styleUrls: ["./form-product-details.component.scss"],
})

export class FormProductDetailsComponent implements OnInit {
  productDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private providerProductDetailService: ProviderProductDetailService) { }
  @Output() formSubmitData:EventEmitter<any>= new EventEmitter<any>();

  handleChange(event) { }

  get f() {
    return this.productDetailsForm.controls;
  }

  ngOnInit() {
    this.buildProductDetails();
  }
  buildProductDetails() {
    this.productDetailsForm = this.formBuilder.group({      
      productVideoLink: ["", [Validators.required]],
      image: ["", [Validators.required]],
      productDescription: ["", [Validators.required]],
    });
  }
  async subProductDetailsForm() {
    let formData=this.productDetailsForm.value;
    console.log("formData",formData);    
    let data={
      formData: formData,
      value:'second'
    }
    this.formSubmitData.emit(data);

    // this.providerProductDetailService.addProductDetail(this.productDetailsForm.value).subscribe(
    //   (res) => {
    //     this.resetFormGroup(this.productDetailsForm);
    //     window.alert('API Success');
    //   },
    //   (err) => {
    //     window.alert('API Error');
    //   }
    // );
  }

  private resetFormGroup(form: FormGroup) {
    form.reset();

  }
}
