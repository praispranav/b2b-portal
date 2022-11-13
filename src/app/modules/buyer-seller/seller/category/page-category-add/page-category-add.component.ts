import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderCategoryService } from "./../../../../../core/providers/user/provider-category.service";
import { AppMessageService } from "../../../../../core/services/app-message.service";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

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

  constructor(
    private appMessageService: AppMessageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private providerCategoryService: ProviderCategoryService
  ) {}

  get f() {
    return this.categoryForm.controls;
  }

  ngOnInit() {
    this.setConfig();
  }

  setConfig() {
    this.buildCategoryForm();
    this.parentId = this.activatedRoute.snapshot.params["parentId"];
    if (this.parentId) {
      this.providerCategoryService
        .getCategoryById(this.parentId)
        .subscribe(
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
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(165)]],
      icon: [''],
      image: ['', ],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(165)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(165)]],
      keywords: [[]],
      level: [0],
      parentId: [""],
      isActivated: [true],
    });
  }

  async subCategoryForm() {
    if (this.iconList.length > 0) {
      this.f.icon.setValue(await this.toBase64(this.iconList[0].originFileObj));
    }
    if (this.imageList.length > 0) {
      this.f.image.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    if (this.categoryForm.invalid) {
      this.markFormGroupTouched(this.categoryForm);
      return;
    }
    if (this.f.parentId.value["_id"] !== undefined) {
      this.f.level.setValue(Number(this.f.parentId.value.level) + 1);
      this.f.parentId.setValue(this.f.parentId.value._id);
    }

    this.providerCategoryService
      .addCategory(this.categoryForm.value)
      .subscribe(
        (res) => {
          let message = res.header.message;
          this.appMessageService.createBasicNotification(res.header.status, message);
          this.router.navigateByUrl(`/seller/category/category-list`);
        },
        (err) => {
          let message = err.header.message;
          this.appMessageService.createBasicNotification(err.header.status, 'message');
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
