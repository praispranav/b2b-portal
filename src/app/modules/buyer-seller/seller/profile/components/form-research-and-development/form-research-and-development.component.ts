import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from '../../../../../../core/services/app-message.service';
import { ProviderResearchAndDevelopmentService } from '../../../../../../core/providers/user/provider-research-and-development.service';

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
  ifNo:boolean=true;
  constructor(
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerResearchAndDevelopmentService: ProviderResearchAndDevelopmentService
  ) { }

  get f() {
    return this.researchAndDevelopmentForm.controls;
  }

  ngOnInit() {
    this.buildTypeForm();
    this.updateDataIfExist();
  }
  clickNo(){
    this.ifNo = false;
  }
  clickYes(){
    this.ifNo = true;
  }

  buildTypeForm() {
    this.researchAndDevelopmentForm = this.formBuilder.group({
      isQualityProcess: [""],
      certificateName: [""],
      certifiedBy: [""],
      businessScope: [""],
      certificateIssueDate: [""],
      certificateExpiryDate: [""],
    });
  }

  updateDataIfExist(){
    this.isLoading = true;
    this.providerResearchAndDevelopmentService.getResearchAndDevelopmentListByFilter(0, 1, {userId: 'pending'}).subscribe(
      (res: any) => {
        this.isDataExist = res.data.length>0;
        if(!this.isDataExist){
          return;
        }
        this.idIfDataExist = res.data[0]['_id'];
        this.f.isQualityProcess.setValue(res.data[0].isQualityProcess);
        this.f.certificateName.setValue(res.data[0].certificateName);
        this.f.certifiedBy.setValue(res.data[0].certifiedBy);
        this.f.businessScope.setValue(res.data[0].businessScope);
        this.f.certificateIssueDate.setValue(res.data[0].certificateIssueDate);
        this.f.certificateExpiryDate.setValue(res.data[0].certificateExpiryDate);
      },
      (err) => { this.isDataExist = false; },
      () => { this.isLoading = false; }
    );
  }

  async subResearchAndDevelopmentForm() {
    if (this.researchAndDevelopmentForm.invalid) {
      this.markFormGroupTouched(this.researchAndDevelopmentForm);
      return;
    }
    this.isLoading = true;
    const formValue = this.researchAndDevelopmentForm.value;    
    if(this.isDataExist){
      formValue._id = this.idIfDataExist;
      this.providerResearchAndDevelopmentService.updateResearchAndDevelopment(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Research & Development Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Research & Development Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerResearchAndDevelopmentService.addResearchAndDevelopment(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Research & Development Added Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Research & Development Not Added") },
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
