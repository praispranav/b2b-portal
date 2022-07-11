import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderHelpComplainService } from '../../../core/providers/user/provider-help-complain.service';
@Component({
  selector: 'app-page-complain-add',
  templateUrl: './page-complain-add.component.html',
  styleUrls: ['./page-complain-add.component.scss']
})
export class PageComplainAddComponent implements OnInit {
  complaintdispute: FormGroup
  fileName: any;
  checkRadioValue: boolean;
  // @ViewChild('fileInputDoc')fileInput:ElementRef
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
      file: [File, [Validators.required]]
    })
  }

  async complaintdisputeHandler() {

    // if (this.complaintdispute.invalid) {
    //   this.markFormGroupTouched(this.complaintdispute);
    //   return;
    // }
    let formData = this.complaintdispute.value;
    console.log(formData);


    this.providerHelpComplainService.addHelpComplain(formData).subscribe(
      (res) => {
        // this.resetFormGroup(formData);
        window.alert('API Success');
        this.complaintdispute.reset();
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
    this.complaintdispute.controls.type.setValue(radioValue);
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

      this.fileName = event['target'].result;


    }
    this.complaintdispute.controls.file.setValue(fileName)





  }
}

