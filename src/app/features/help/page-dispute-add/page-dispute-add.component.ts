import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderHelpDisputeService } from '../../../core/providers/user/provider-help-dispute.service';

@Component({
  selector: 'app-page-dispute-add',
  templateUrl: './page-dispute-add.component.html',
  styleUrls: ['./page-dispute-add.component.scss']
})
export class PageDisputeAddComponent implements OnInit {
  disputeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private providerHelpDisputeService: ProviderHelpDisputeService
  ) { }

  get f() {
    return this.disputeForm.controls;
  }

  ngOnInit() {
    this.buildDisputeForm();
  }

  buildDisputeForm() {
    this.disputeForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]],
      link: ['', [Validators.required]],
      file: [''],
    });
  }

  async subCategoryForm() {
    if (this.disputeForm.invalid) {
      this.markFormGroupTouched(this.disputeForm);
      return;
    }

    this.providerHelpDisputeService.addHelpDispute(this.disputeForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.disputeForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }

  private markFormGroupTouched(form: FormGroup) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  private resetFormGroup(form: FormGroup) {
    form.reset();
  }

  fileUpload(files) {
    console.log(files.target.files)
  }

  clickOnInputFile(el) {
    el.click();
  }
}