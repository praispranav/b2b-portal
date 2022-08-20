import { AppMessageServiceService } from './../../../../service/app-message-service.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderMaterFilterService } from './../../../../core/providers/master/provider-mater-filter.service';

@Component({
  selector: 'app-page-filter-add',
  templateUrl: './page-filter-add.component.html',
  styleUrls: ['./page-filter-add.component.scss']
})
export class PageFilterAddComponent implements OnInit {
  filterForm: FormGroup;

  constructor(
    private router: Router,
    private appmessageService:AppMessageServiceService,
    private formBuilder: FormBuilder,
    private providerMaterFilterService: ProviderMaterFilterService
  ) { }

  get f() {
    return this.filterForm.controls;
  }

  get fields() {
    return this.f.fields as FormArray;
  }

  ngOnInit() {
    this.buildFilterForm();
    this.addField();
  }

  buildFilterForm() {
    this.filterForm = this.formBuilder.group({
      filter: ['', [Validators.required]],
      fields: this.formBuilder.array([])
    });
  }

  get fieldArr() {
    return this.f["fields"] as FormArray;
  }

  addField() {
    const fieldForm = this.formBuilder.group({
      field: ['', Validators.required]
    });
    this.fieldArr.push(fieldForm);
  }

  deleteField(fieldIndex: number) {
    this.fieldArr.removeAt(fieldIndex);
  }

  async subFilterForm() {
    if (this.filterForm.invalid) {
      this.markFormGroupTouched(this.filterForm);
      return;
    }
    const formValue = this.filterForm.value;
    formValue.fields = formValue.fields.map(i => i.field);
    this.providerMaterFilterService.addMaterFilter(formValue).subscribe(
      (res) => { this.appmessageService.createBasicNotification('success', "Filter Added Successfully"); this.router.navigateByUrl(`/admin/filter/filter-list`); },
      (err) => { this.appmessageService.createBasicNotification('error', "Filter Not Added") }
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

 
}