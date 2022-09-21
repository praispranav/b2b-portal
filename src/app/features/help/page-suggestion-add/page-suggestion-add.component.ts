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
  file: File;
  fileType: any | string;
  imageBase64: string | any = "";
  fileName: string = '';
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
  changeListener($event): void {
    this.file = $event.target.files[0];
  }
  fileUpload(event: any) {
    const file = event.target.files[0];
    console.log(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log("file name", file.name)
      this.imageBase64 = reader.result;
      this.suggestionForm.patchValue({ imageUrl: reader.result as string })
      this.fileType = file.type;
      this.fileName = file.name
    }
  }
  clickOnInputFile(el) {
    el.click();
  }
}