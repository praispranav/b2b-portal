import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../../../@pages/components/message/message.service';
import { ProviderMaterFilterService } from './../../../../core/providers/master/provider-mater-filter.service';

@Component({
  selector: 'app-page-filter-add',
  templateUrl: './page-filter-add.component.html',
  styleUrls: ['./page-filter-add.component.scss']
})
export class PageFilterAddComponent implements OnInit {
  filterForm: FormGroup;
  heading: string;
  description: string;
  currentTab: number = 0;
  
  
  notificationModel: any = {
    type: 'flip',
    message: 'Filter added Successfully',
    color: 'Success',
    position: 'top-right',
    current: 0
  };
  nofitcationStrings: any = [
 
    {
      heading: 'Flip Bar',
      desc: 'Awesome Loading Circle Animation',
      position: 'top-right',
      type: 'flip'
    },

  
  ];
  constructor(
    private _notification: MessageService,
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
    formValue.fields = formValue.fields.map(i=>i.field);
    this.providerMaterFilterService.addMaterFilter(formValue).subscribe(
      (res) => { this.createBasicNotification('success', "Filter Added Successfully"); this.resetFormGroup(this.filterForm) },
      (err) => { this.createBasicNotification('success', "Filter Added Successfully")
                  }
    );
  }
  // this.createBasicNotification('error',"Something error")
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
  createBasicNotification(res:string,msg:string) {
    if (this.notificationModel.current != this.currentTab) {
      this.notificationModel.current = this.currentTab;
      this._notification.remove();
    }
    this.notificationModel.position = this.nofitcationStrings[this.currentTab]['position'];
    this.notificationModel.type = this.nofitcationStrings[this.currentTab]['type'];
    this.notificationModel.color = res;
    this.notificationModel.message=msg;    
    //Create Notification    
      this._notification.create(this.notificationModel.color, this.notificationModel.message, {
        Position: this.nofitcationStrings[this.currentTab]['position'],
        Style: this.notificationModel.type,
        Duration: 0
      });
    
  }
}