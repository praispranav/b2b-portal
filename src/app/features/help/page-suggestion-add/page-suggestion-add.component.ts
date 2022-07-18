import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderHelpSuggestionService } from '../../../core/providers/user/provider-help-suggestion.service';

@Component({
  selector: 'app-page-suggestion-add',
  templateUrl: './page-suggestion-add.component.html',
  styleUrls: ['./page-suggestion-add.component.scss']
})
export class PageSuggestionAddComponent implements OnInit {
  suggestionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private providerHelpSuggestionService: ProviderHelpSuggestionService
  ) { }

  get f() {
    return this.suggestionForm.controls;
  }

  ngOnInit() {
    this.buildSuggestionForm();
  }

  buildSuggestionForm() {
    this.suggestionForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]],
      link: ['', [Validators.required]],
      file: [''],
    });
  }

  async subCategoryForm() {
    if (this.suggestionForm.invalid) {
      this.markFormGroupTouched(this.suggestionForm);
      return;
    }

    this.providerHelpSuggestionService.addHelpSuggestion(this.suggestionForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.suggestionForm);
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

  fileUpload(event) {
    console.log(event.target.files)
  }

  clickOnInputFile(el) {
    el.click();
  }
}