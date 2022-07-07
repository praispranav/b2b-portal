import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderHelpDisputeService } from '../../../core/providers/user/provider-help-dispute.service';
@Component({
  selector: 'app-page-dispute-add',
  templateUrl: './page-dispute-add.component.html',
  styleUrls: ['./page-dispute-add.component.scss']
})
export class PageDisputeAddComponent implements OnInit {
  complaintdispute: FormGroup

  constructor(private formbuilder: FormBuilder, private providerHelpDisputeService: ProviderHelpDisputeService) { }

  get f() { return this.complaintdispute.controls }

  ngOnInit() {
    this.buildcomplaintdispute()
  }

  buildcomplaintdispute() {
    this.complaintdispute = this.formbuilder.group({
      subject: ['', [Validators.required, Validators.maxLength(200)]],
      pageLink: ['', [Validators.required]],
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

    this.providerHelpDisputeService.addHelpDispute(this.complaintdispute.value).subscribe(
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
