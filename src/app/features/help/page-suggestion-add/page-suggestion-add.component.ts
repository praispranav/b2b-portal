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
  fileName: any;
  checkRadioValue: boolean;
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
      file: [File, [Validators.required]]
    })
  }

  async complaintsuggestHandler() {

    // if (this.complaintsuggest.invalid) {
    //   this.markFormGroupTouched(this.complaintsuggest);
    //   return;
    // }
    let formData = this.complaintsuggest.value;
    console.log(formData);


    this.providerHelpSuggestionService.addHelpSuggestion(formData).subscribe(
      (res) => {
        // this.resetFormGroup(this.complaintsuggest);
        window.alert('API Success');
        this.complaintsuggest.reset();
        this.checkRadioValue = false;
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }

  // private markFormGroupTouched(form: FormGroup) {
  //   Object.values(form.controls).forEach((control) => {
  //     control.markAsTouched();
  //     if ((control as any).controls) {
  //       this.markFormGroupTouched(control as FormGroup);
  //     }
  //   });
  // }

  checkRadio(event: any) {
    let radioValue = event.target.value;
    console.log(radioValue);
    this.complaintsuggest.controls.type.setValue(radioValue);
  }
  openFile(fileInputDoc) {
    fileInputDoc.click();

  }
  onSelectFile(event: object) {

    let fileName = event['target'].files[0].name;
    // console.log(fileName);
    let reader = new FileReader();
    reader.readAsDataURL(event['target'].files[0]);
    reader.onload = (event) => {

    //  this.fileName = event['target'].result;


    }
    this.complaintsuggest.controls.file.setValue(fileName)

  }
}
