import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  }

  buildTypeForm() {
    this.qualityControlForm = this.formBuilder.group({
      isQualityProcess: ["", [Validators.required]],
      processName: ["", [Validators.required]],
      processDescription: ["", [Validators.required]],
    });
  }

  updateDataIfExist(){
    this.isLoading = true;
    this.providerQualityControlService.getQualityControlListByFilter(0, 1, {userId: 'pending'}).subscribe(
      (res: any) => {
        this.isDataExist = res.data.length>0;
        if(!this.isDataExist){
          return;
        }
        this.idIfDataExist = res.data[0]['_id'];
        this.f.isQualityProcess.setValue(res.data[0].isQualityProcess);
        this.f.processName.setValue(res.data[0].processName);
        this.f.processDescription.setValue(res.data[0].processDescription);
      },
      (err) => { this.isDataExist = false; },
      () => { this.isLoading = false; }
    );
  }

  async subQualityControlForm() {
    if (this.qualityControlForm.invalid) {
      this.markFormGroupTouched(this.qualityControlForm);
      return;
    }
    this.isLoading = true;
    const formValue = this.qualityControlForm.value;    
    if(this.isDataExist){
      formValue._id = this.idIfDataExist;
      this.providerQualityControlService.updateQualityControl(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Detail Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Detail Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerQualityControlService.addQualityControl(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Company Detail Added Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Company Detail Not Added") },
        () => { this.isLoading = false; }
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
}
