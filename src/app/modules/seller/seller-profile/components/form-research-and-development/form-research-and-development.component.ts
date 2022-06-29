import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProviderRAndDService } from "../../../../../core/providers/seller/provider-rAndD.service";

@Component({
  selector: "app-form-research-and-development",
  templateUrl: "./form-research-and-development.component.html",
  styleUrls: ["./form-research-and-development.component.scss"],
})
export class FormResearchAndDevelopmentComponent implements OnInit {
  randdForm: FormGroup;
  imageList: any[] = [];

  constructor(private formBuilder: FormBuilder, private providerRAndDService: ProviderRAndDService) { }
  get f() {
    return this.randdForm.controls;
  }

  ngOnInit() {
    this.buildRanddForm();
  }

  buildRanddForm() {
    this.randdForm = this.formBuilder.group({
      certificateName: [""],
      certifiedBy: [""],
      businessScope: [""],
      selectNo: [""],
      selectYes: [""],
      businessDate: [""],
    });
  }
  async subRAndForm() {
    if (this.randdForm.invalid) {
      this.markFormGroupTouched(this.randdForm);
      return;
    }
    if (this.imageList.length > 0) {
      this.f.image.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    this.providerRAndDService.addRAndD(this.randdForm.value).subscribe(
      (res) => {
        this.resetFormGroup(this.randdForm);
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
  async toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  private resetFormGroup(form: FormGroup) {
    form.reset();
    this.imageList = [];
  }

}
