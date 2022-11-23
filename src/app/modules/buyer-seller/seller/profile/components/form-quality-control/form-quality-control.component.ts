import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppMessageService } from '../../../../../../core/services/app-message.service';
import { ProviderQualityControlService } from './../../../../../../core/providers/user/provider-quality-control.service';

@Component({
  selector: "app-form-quality-control",
  templateUrl: "./form-quality-control.component.html",
  styleUrls: ["./form-quality-control.component.scss"],
})
export class FormQualityControlComponent implements OnInit {
  isLoading = true;
  isDataExist: boolean;
  idIfDataExist: string;
  qualityControlForm: FormGroup;
  imageList: any[] = [];
  formGroup: FormGroup;
  formArray: FormArray = new FormArray([]);
  qualityControl: any[] = [];
  serviceSubscription: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerQualityControlService: ProviderQualityControlService
  ) { }

  get f() {
    return this.qualityControlForm.controls;

  }

  ngOnInit() {
    this.buildTypeForm();
    this.updateDataIfExist();
    this.addNew("");
    this.serviceSubscription.push(
      this.formArray.valueChanges.pipe().subscribe(() => {
        this.qualityControl = this.formArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );
  }

  buildTypeForm() {
    this.qualityControlForm = this.formBuilder.group({
      isQualityProcess: [""],
    });
  }
  addNew(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      processName: [data.processName ? data.processName : ""],
      processDescription: [data.processDescription ? data.processDescription : ""],
      image: [data.image ? data.image : ""],
    }
    );
    this.formArray.push(this.formGroup);

  }


  removeAt(index: number): void {
    this.formArray.removeAt(index);
  }
  updateDataIfExist() {
    this.isLoading = true;
    this.providerQualityControlService.getQualityControlListByFilter(0, 1, { userId: 'pending' }).subscribe(
      (res: any) => {
        let patchFormvalue: any = res.data[0];

        this.isDataExist = res.data.length > 0;
        if (!this.isDataExist) {
          return;
        }
        this.idIfDataExist = res.data[0]['_id'];
        this.qualityControlForm.patchValue({
          processName: patchFormvalue.processName ? patchFormvalue.processName : '',
          processDescription: patchFormvalue.processDescription ? patchFormvalue.processDescription : '',
          image: patchFormvalue.image ? patchFormvalue.image : '',
        })
        patchFormvalue.tradeShow.forEach(element => {
          this.addNew(element);
        })
      },
      (err) => { this.isDataExist = false; },
      () => { this.isLoading = false; }
    );
  }

  async subQualityControlForm() {
    console.log("image value", this.f, this.f.image)
    if (this.imageList.length > 0) {
      this.f.isQualityProcess.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    if (this.qualityControlForm.invalid) {
      this.markFormGroupTouched(this.qualityControlForm);
      return;
    }
    this.isLoading = true;
    // const formArray = this.formArray.value;
    // console.log(this.imageList)
    // for (let x = 0; x < this.imageList.length; x++) {
    //   formArray[x].image = await this.toBase64(this.imageList[x][0])
    // }
    const formData = this.qualityControlForm.value;
    let reqObj = {
      qualityArray: [...this.qualityControl],

    }
    console.log('reqData', reqObj);

    if (this.isDataExist) {
      formData._id = this.idIfDataExist;
      this.providerQualityControlService.updateQualityControl(reqObj).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Detail Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Detail Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerQualityControlService.addQualityControl(reqObj).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Detail Added Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Detail Not Added") },
        () => { this.isLoading = false; }
      );
    }
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
