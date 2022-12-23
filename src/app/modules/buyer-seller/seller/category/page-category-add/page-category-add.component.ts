import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderCategoryService } from "./../../../../../core/providers/user/provider-category.service";
import { AppMessageService } from "../../../../../core/services/app-message.service";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { ImageService } from "../../../../../core/providers/user/image.service";
import { environment } from "../../../../../../environments/environment";

@Component({
  selector: "app-page-category-add",
  templateUrl: "./page-category-add.component.html",
  styleUrls: ["./page-category-add.component.scss"],
})
export class PageCategoryAddComponent implements OnInit {
  parentId: any;
  categoryForm: FormGroup;
  iconList: any[] = [];
  imageList: any[] = [];
  imageUrl: string = environment.imageStorage

  constructor(
    private appMessageService: AppMessageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private providerCategoryService: ProviderCategoryService,
    private imageService: ImageService
  ) {}

  get f() {
    return this.categoryForm.controls;
  }

  ngOnInit() {
    this.setConfig();
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

  setConfig() {
    this.buildCategoryForm();
    this.parentId = this.activatedRoute.snapshot.params["parentId"];
    if (this.parentId) {
      this.providerCategoryService.getCategoryById(this.parentId).subscribe(
        (res) => {
          this.parentId = res.data[0];
          this.f.parentId.setValue(this.parentId);
        },
        (err) => {
          this.router.navigateByUrl(`/seller/category/category-list`);
        }
      );
    }
  }

  buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(165),
        ],
      ],
      icon: [""],
      image: [""],
      title: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(165),
        ],
      ],
      description: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(165),
        ],
      ],
      keywords: [[]],
      level: [0],
      parentId: [""],
      isActivated: [true],
    });
  }

  async subCategoryForm() {
    if (this.iconList.length > 0) {
      const iconName: any = await this.uploadImageToServer(
        this.iconList[0].originFileObj
      );
      this.f.icon.setValue(iconName.fileName);
    }

    if (this.imageList.length > 0) {
      const imageList: any = await this.uploadImageToServer(
        this.imageList[0].originFileObj
      );
      this.f.image.setValue(imageList.fileName);
    }

    if (this.categoryForm.invalid) {
      this.markFormGroupTouched(this.categoryForm);
      return;
    }
    if (this.f.parentId.value["_id"] !== undefined) {
      this.f.level.setValue(Number(this.f.parentId.value.level) + 1);
      this.f.parentId.setValue(this.f.parentId.value._id);
    }

    this.providerCategoryService.addCategory(this.categoryForm.value).subscribe(
      (res) => {
        let message = res.header.message;
        this.appMessageService.createBasicNotification(
          res.header.status,
          message
        );
        this.router.navigateByUrl(`/seller/category/category-list`);
      },
      (err) => {
        let message = err.header.message;
        this.appMessageService.createBasicNotification(
          err.header.status,
          "message"
        );
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

  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}
