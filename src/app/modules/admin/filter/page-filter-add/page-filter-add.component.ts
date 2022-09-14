import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppMessageService } from '../../../../core/services/app-message.service';
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
    private appMessageService: AppMessageService,
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
      (res) => { this.appMessageService.createBasicNotification(res.header.status, res.header.message); this.router.navigateByUrl(`/admin/filter/filter-list`); },
      (err) => { this.appMessageService.createBasicNotification(err.header.status, err.header.message) }
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