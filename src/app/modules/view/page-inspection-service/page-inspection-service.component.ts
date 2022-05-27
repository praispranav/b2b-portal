import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-page-inspection-service',
  templateUrl: './page-inspection-service.component.html',
  styleUrls: ['./page-inspection-service.component.scss']
})
export class PageInspectionServiceComponent implements OnInit {
  inspectionForm: FormGroup;
  options = [
    { value: 'consumer Goods', label: 'consumer Goods' },
    { value: 'Industrial Goods', label: 'Industrial Goods' },
    { value: 'Food And Agriculture', label: 'Food And Agriculture' },
    { value: 'Transportation', label: 'Transportation' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'disabled', label: 'Disabled', disabled: true }
  ];
  constructor(private formBuilder: FormBuilder) { }
  get f() {
    return this.inspectionForm.controls;
  }
  ngOnInit() {
    this.buildInspectionForm();
  }

  buildInspectionForm() {
    this.inspectionForm = this.formBuilder.group({
      option: ["", [Validators.required]],
      description: ["", [Validators.required]],

    });
  }


  subInspectionForm() {
    const formData = this.inspectionForm.value;
    console.log(formData)
  }
}
