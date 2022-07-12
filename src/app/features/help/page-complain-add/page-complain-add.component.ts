import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderHelpComplainService } from '../../../core/providers/user/provider-help-complain.service';

@Component({
  selector: 'app-page-complain-add',
  templateUrl: './page-complain-add.component.html',
  styleUrls: ['./page-complain-add.component.scss']
})
export class PageComplainAddComponent implements OnInit {
  complainForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private providerHelpComplainService: ProviderHelpComplainService
  ) { }

  get f() {
    return this.complainForm.controls;
  }

  ngOnInit() {
    this.buildComplainForm();
  }

  buildComplainForm() {
    this.complainForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file: [''],
    });
  }

  async subCategoryForm() {
    if (this.complainForm.invalid) {
      this.markFormGroupTouched(this.complainForm);
      return;
    }

    this.providerHelpComplainService.addHelpComplain(this.complainForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.complainForm);
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

  fileUpload(files){
    console.log(files.target.files)
  }

  clickOnInputFile(el) {
    el.click();
  }
}
