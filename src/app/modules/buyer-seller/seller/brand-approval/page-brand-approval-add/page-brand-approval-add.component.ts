import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ImageService } from "../../../../../core/providers/user/image.service";
import { ProviderBrandApprovalService } from "./../../../../../core/providers/user/provider-brand-approval.service";
import { AppMessageService } from "./../../../../../core/services/app-message.service";

@Component({
  selector: "app-page-brand-approval-add",
  templateUrl: "./page-brand-approval-add.component.html",
  styleUrls: ["./page-brand-approval-add.component.scss"],
})
export class PageBrandApprovalAddComponent implements OnInit {
  brandForm: FormGroup;
  imageList: any[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerBrandApprovalService: ProviderBrandApprovalService,
    private imageService: ImageService,
  ) {}

  get f() {
    return this.brandForm.controls;
  }

  get products() {
    return this.f.products as FormArray;
  }

  ngOnInit() {
    this.buildBrandForm();
    this.addProduct();
  }

  buildBrandForm() {
    this.brandForm = this.formBuilder.group({
      brandType: ["", Validators.required],
      brandName: ["", Validators.required],
      trademarkOffice: ["", Validators.required],
      serialNumber: [
        "",
        [
          Validators.required,
          Validators.minLength(9876543),
          Validators.maxLength(12345678),
        ],
      ],
      products: this.formBuilder.array([]),
      image: [""],
    });
  }

  get productArr() {
    return this.f["products"] as FormArray;
  }

  addProduct() {
    const productForm = this.formBuilder.group({
      product: ["", Validators.required],
    });
    this.productArr.push(productForm);
  }

  deleteProduct(productIndex: number) {
    this.productArr.removeAt(productIndex);
  }

  async subBrandForm() {
    // if (this.imageList.length > 0) {
    //   this.f.image.setValue(
    //     await this.toBase64(this.imageList[0].originFileObj)
    //   );
    // }

    const pictureList = [];
      for await (const item of this.imageList) {
        console.log(item.originFileObj)
        const productImage: any = await this.uploadImageToServer(
          item.originFileObj
        );
        pictureList.push(productImage.fileName);
      }
      console.log(pictureList)
    if (this.brandForm.invalid) {
      this.markFormGroupTouched(this.brandForm);
      return;
    }

    const formValue = this.brandForm.value;
    formValue.image = pictureList[0] || "";
    formValue.products = formValue.products.map((i) => i.product);
    this.providerBrandApprovalService.addBrandApproval(formValue).subscribe(
      (res) => {
        this.appMessageService.createBasicNotification(
          res.header.status,
          res.header.message
        );
        this.router.navigateByUrl(`/seller/brand-approval/brand-approval-list`);
      },
      (err) => {
        this.appMessageService.createBasicNotification(
          err.header.status,
          err.header.message
        );
      }
    );
  }

  uploadImageToServer(image) {
    return new Promise((resolve, reject) => {
      this.imageService.uploadImage(image).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  async toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}
