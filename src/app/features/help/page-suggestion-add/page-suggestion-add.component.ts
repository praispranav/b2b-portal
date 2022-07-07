import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ProviderHelpSuggestionService } from '../../../core/providers/user/provider-help-suggestion.service';

@Component({
  selector: 'app-page-suggestion-add',
  templateUrl: './page-suggestion-add.component.html',
  styleUrls: ['./page-suggestion-add.component.scss']
})
export class PageSuggestionAddComponent implements OnInit {
  complaintsuggest: FormGroup

  constructor(private formbuilder: FormBuilder, private providerHelpSuggestionService: ProviderHelpSuggestionService) { }

  get f() { return this.complaintsuggest.controls }
  
  ngOnInit() {
    this.buildcomplaintsugesstion()
  }

  buildcomplaintsugesstion() {
    this.complaintsuggest = this.formbuilder.group({
      complaintsubject: ['', [Validators.required]],
      sellerlink: ['', [Validators.required, Validators.maxLength(200)]],
      discription: ['', [Validators.required]],
      type: ['', [Validators.required]],
      file: ['', [Validators.required]]


    })
  }

  async complaintsuggestHandler() {

    if (this.complaintsuggest.invalid) {
      this.markFormGroupTouched(this.complaintsuggest);
      return;
    }

    //////////////
    if (this.f.parentId.value['_id'] !== undefined) {
      this.f.level.setValue(Number(this.f.parentId.value.level) + 1);
      this.f.parentId.setValue(this.f.parentId.value._id);
    }

    this.providerHelpSuggestionService.addHelpSuggestion(this.complaintsuggest.value).subscribe(
      (res) => {
        this.resetFormGroup(this.complaintsuggest);
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
