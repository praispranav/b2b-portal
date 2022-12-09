import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ImageService } from "../../../../../../core/providers/user/image.service";
import { ProviderProductDetailService } from "../../../../../../core/providers/user/provider-product-detail.service";
export type subProductDetails = { productVideoLink: string, image: string, productDescription: string };

@Component({
  selector: "app-form-product-details",
  templateUrl: "./form-product-details.component.html",
  styleUrls: ["./form-product-details.component.scss"],
})

export class FormProductDetailsComponent implements OnInit {
  productDetailsForm: FormGroup;
  pictureList: any[] = [];
  payload: any;

  constructor(private formBuilder: FormBuilder, private providerProductDetailService: ProviderProductDetailService, private imageService: ImageService,
  ) { }
  @Output() formSubmitData: EventEmitter<any> = new EventEmitter<any>();

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
      productImage: ["", [Validators.required]],
      productDescription: ["", [Validators.required]],
    });
  }
  uploadImageToServer(image) {
    return new Promise((resolve, reject) => {

      // this.companyLogoUploading = true
      this.imageService.uploadImage(image).subscribe((res) => {
        resolve(res)
      }, (error) => {
        console.log(error);
        reject(error)
      })

    })
  }
  async subProductDetailsForm() {
    try {
      const pictureList = []
      for await (const item of this.pictureList) {
        const productImage: any = await this.uploadImageToServer(item.originFileObj);
        pictureList.push(productImage.fileName)
      }
      // let formData = this.productDetailsForm.value;

      this.payload = {
        productImage: this.pictureList,
        ...this.productDetailsForm.value

      };
      console.log("formData", this.payload);
      let data = {
        formData: this.payload,
        value: 'second'
      }
      this.formSubmitData.emit(this.payload);
      console.log(this.payload)
    }
    catch (error) {
      console.log(error)
    }
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
