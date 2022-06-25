import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { QualityControlService } from "../../../../../provider/quality-control.service";
@Component({
  selector: "app-form-quality-control",
  templateUrl: "./form-quality-control.component.html",
  styleUrls: ["./form-quality-control.component.scss"],
})
export class FormQualityControlComponent implements OnInit {
  qualityControlForm: FormGroup;
  processPicture: any[] = [];
  constructor(private formBuilder: FormBuilder, private qualityControlService: QualityControlService) { }
  get f() {
    return this.qualityControlForm.controls;
  }
  ngOnInit(): void {
    this.buildQualityControlForm();
  }

  buildQualityControlForm() {
    this.qualityControlForm = this.formBuilder.group({
      processName: ["", [Validators.required]],
      processPicture: ["", [Validators.required]],
      description: ["", [Validators.required]],
      selectNo: ["", [Validators.required]],
      selectYes: ["", [Validators.required]],
    });
  }

  async addForm() {
    // if (this.processPicture.length > 0) {
    //   this.f.image.setValue(
    //     await this.toBase64(this.processPicture[0].originFileObj)
    //   );
    // }
    this.qualityControlService.addQualityControl(this.qualityControlForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.qualityControlForm);
        window.alert('API Success');
      },
      (err) => {
        window.alert('API Error');
      }
    );
  }
  // async toBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // }
  private resetFormGroup(form: FormGroup) {
    form.reset();
    // this.processPicture = [];
  }
}
