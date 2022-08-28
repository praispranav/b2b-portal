import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMessageService } from '../../../../core/services/app-message.service';
import { ProviderMaterFilterService } from './../../../../core/providers/master/provider-mater-filter.service';

@Component({
  selector: 'app-page-filter-edit',
  templateUrl: './page-filter-edit.component.html',
  styleUrls: ['./page-filter-edit.component.scss']
})
export class PageFilterEditComponent implements OnInit {
  filter: any;
  filterForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private activatedRoute: ActivatedRoute,
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
    this.filter = this.activatedRoute.snapshot.params['filter'];
    if (this.filter) {
      this.providerMaterFilterService.getMaterFilterById(this.filter).subscribe(res => {
        this.filter = res.data[0];
        this.f._id.setValue(this.filter['_id']);
        this.f.filter.setValue(this.filter['filter']);
        if (this.filter.fields && this.filter.fields.length > 0) {
          this.filter.fields.forEach(field => {
            this.addField(field);
          })
        } else {
          this.addField();
        }
      }, err => {
        this.router.navigateByUrl(`/admin/filter/filter-list`);
      });
    }
  }

  buildFilterForm() {
    this.filterForm = this.formBuilder.group({
      _id: ['', [Validators.required]],
      filter: ['', [Validators.required]],
      fields: this.formBuilder.array([])
    });
  }

  get fieldArr() {
    return this.f["fields"] as FormArray;
  }

  addField(value = '') {
    const fieldForm = this.formBuilder.group({
      field: [value, Validators.required]
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
    this.providerMaterFilterService.updateMaterFilter(formValue).subscribe(
      (res) => { this.appMessageService.createBasicNotification('success', "Filter Updated Successfully"); this.router.navigateByUrl(`/admin/filter/filter-list`); },
      (err) => { this.appMessageService.createBasicNotification('success', "Filter Not Updated") }
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