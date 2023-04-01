import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppMessageService } from "../../../../../../core/services/app-message.service";
import { ProviderResearchAndDevelopmentService } from "../../../../../../core/providers/user/provider-research-and-development.service";
import { Subscription } from "rxjs";
import { ImageService } from "../../../../../../core/providers/user/image.service";

@Component({
  selector: "app-form-research-and-development",
  templateUrl: "./form-research-and-development.component.html",
  styleUrls: ["./form-research-and-development.component.scss"],
})
export class FormResearchAndDevelopmentComponent implements OnInit {
  isLoading = true;
  isDataExist: boolean;
  idIfDataExist: string;
  researchAndDevelopmentForm: FormGroup;
  rndDArray: any[] = [];
  formGroup: FormGroup;
  imageList: any[] = [];
  formArray: FormArray = new FormArray([]);
  serviceSubscription: Subscription[] = [];
  rndImageUploading: boolean = false;
  rnd: boolean = true;


  constructor(
    private formBuilder: FormBuilder,
    private imageService: ImageService,

    private appMessageService: AppMessageService,
    private providerResearchAndDevelopmentService: ProviderResearchAndDevelopmentService
  ) { }

  get f() {
    return this.researchAndDevelopmentForm.controls;
  }

  ngOnInit() {
    this.buildTypeForm();
    this.updateDataIfExist();
    this.addNew("");

    this.serviceSubscription.push(
      this.formArray.valueChanges.pipe().subscribe(() => {
        this.rndDArray = this.formArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );
  }

  rndYesNo() {
    const value = this.researchAndDevelopmentForm.value.isResearchAndDevelopment
    this.rnd = Boolean(value == 'Yes')
  }


  // noRandDValue(){
  //   this.noRandD = false;
  //   }
  //   yesRandDValue(){
  //     this.noRandD = true;
  //   }
  uploadImageToServer(image) {
    return new Promise((resolve, reject) => {
      this.rndImageUploading = true;
      this.imageService.uploadImage(image).subscribe(
        (res) => {
          this.isLoading = false;
          resolve(res);
        },
        (error) => {
          console.log(error);
          reject(error);
          this.isLoading = false;
        }
      );
    });
  }
  buildTypeForm() {
    this.researchAndDevelopmentForm = this.formBuilder.group({
      isResearchAndDevelopment: ["Yes"],
    });
  }
  addNew(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      certificateName: [data.certificateName ? data.certificateName : ""],
      certifiedBy: [data.certifiedBy ? data.certifiedBy : ""],
      businessScope: [data.businessScope ? data.businessScope : ""],
      certificateIssueDate: [
        data.certificateIssueDate ? data.certificateIssueDate : "",
      ],
      certificateExpiryDate: [
        data.certificateExpiryDate ? data.certificateExpiryDate : "",
      ],
      image: [data.image ? data.image : ""],
    });
    this.formArray.push(this.formGroup);
  }

  removeAt(index: number): void {
    this.formArray.removeAt(index);
  }
  updateDataIfExist() {
    this.isLoading = true;
    this.providerResearchAndDevelopmentService
      .getResearchAndDevelopmentListByFilter(0, 1, { userId: "pending" })
      .subscribe(
        (res: any) => {
          this.isDataExist = res.data.length > 0;
          let patchFormvalue: any = res.data[0];

          if (!this.isDataExist) {
            return;
          }
          this.idIfDataExist = res.data[0]["_id"];
          this.researchAndDevelopmentForm.patchValue({
            certificateName: patchFormvalue.certificateName
              ? patchFormvalue.certificateName
              : "",
            certifiedBy: patchFormvalue.certifiedBy
              ? patchFormvalue.certifiedBy
              : "",
            businessScope: patchFormvalue.businessScope
              ? patchFormvalue.businessScope
              : "",
            certificateIssueDate: patchFormvalue.certificateIssueDate
              ? patchFormvalue.certificateIssueDate
              : "",
            certificateExpiryDate: patchFormvalue.certificateExpiryDate
              ? patchFormvalue.certificateExpiryDate
              : "",
            image: patchFormvalue.image ? patchFormvalue.image : "",
          });
        },
        (err) => {
          this.isDataExist = false;
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  async subResearchAndDevelopmentForm() {
    console.log("image value", this.f, this.f.image);
    console.log("ImageList", this.imageList);
    const pictureList = [];
    let i = 0;
    for await (const item of this.imageList) {
      const researchImage: any = await this.uploadImageToServer(
        item[0].originFileObj
      );
      pictureList[i] = researchImage.fileName;
      i++;
      console.log("research and development Picture", researchImage);
    }

    console.log(pictureList);

    console.log("Form Values", this.formArray.value);
    const formValues = this.formArray.value;
    pictureList.forEach((i, index) => {
      formValues[index].image = i;
    });

    console.log(formValues);

    if (this.researchAndDevelopmentForm.invalid) {
      this.markFormGroupTouched(this.researchAndDevelopmentForm);
      return;
    }
    this.isLoading = true;
    let reqObj = {
      isResearchAndDevelopment:
        this.researchAndDevelopmentForm.value.isResearchAndDevelopment,
      rnd: [...this.rndDArray],
      isVerify: false,
      isPreview: false
    };
    console.log("reqData", reqObj);
    if (this.isDataExist) {
      formValues._id = this.idIfDataExist;
      this.providerResearchAndDevelopmentService
        .updateResearchAndDevelopment(reqObj)
        .subscribe(
          (res) => {
            this.appMessageService.createBasicNotification(
              "success",
              "Research & Development Updated Successfully"
            );
          },
          (err) => {
            this.appMessageService.createBasicNotification(
              "success",
              "Research & Development Not Updated"
            );
          },
          () => {
            this.isLoading = false;
          }
        );
    } else {
      this.providerResearchAndDevelopmentService
        .addResearchAndDevelopment(reqObj)
        .subscribe(
          (res) => {
            this.appMessageService.createBasicNotification(
              "success",
              "Research & Development Added Successfully"
            );
          },
          (err) => {
            this.appMessageService.createBasicNotification(
              "success",
              "Research & Development Not Added"
            );
          },
          () => {
            this.isLoading = false;
          }
        );
    }
  }

  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
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
}
