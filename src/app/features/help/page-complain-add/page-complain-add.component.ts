import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderHelpComplainService } from '../../../core/providers/user/provider-help-complain.service';
@Component({
  selector: 'app-page-complain-add',
  templateUrl: './page-complain-add.component.html',
  styleUrls: ['./page-complain-add.component.scss']
})
export class PageComplainAddComponent implements OnInit {
  complaintdispute: FormGroup

  constructor(private formbuilder: FormBuilder,
    private providerHelpComplainService: ProviderHelpComplainService) { }

  get f() { return this.complaintdispute.controls }

  ngOnInit() {
    this.buildcomplaintdispute()
  }

  buildcomplaintdispute() {
    this.complaintdispute = this.formbuilder.group({
      subject: ['', [Validators.required, Validators.maxLength(200)]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      file: ['', [Validators.required]]


    })
  }

  async complaintdisputeHandler() {

    if (this.complaintdispute.invalid) {
      this.markFormGroupTouched(this.complaintdispute);
      return;
    }


    this.providerHelpComplainService.addHelpComplain(this.complaintdispute.value).subscribe(
      (res) => {
        this.resetFormGroup(this.complaintdispute);
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
}

