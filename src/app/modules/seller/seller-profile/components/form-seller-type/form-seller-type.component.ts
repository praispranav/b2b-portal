import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from '../../../../../core/services/app-message.service';
import { ProviderSellerTypeService } from '../../../../../core/providers/user/provider-seller-type.service';

@Component({
  selector: 'app-form-seller-type',
  templateUrl: './form-seller-type.component.html',
  styleUrls: ['./form-seller-type.component.scss']
})
export class FormSellerTypeComponent implements OnInit {
  isLoading = true;
  isDataExist: boolean;
  idIfDataExist: string;
  sellerTypeForm: FormGroup;
  sellerTypeList: any[] = [
    {  checked: false, name: "Distributor", value: "Distributor" },
    {  checked: false, name: "Government Unit", value: "Government Unit" },
    {  checked: false, name: "Manufacturer", value: "Manufacturer" },
    {  checked: false, name: "Association", value: "Association" },
    {  checked: false, name: "Exporter", value: "Exporter" },
    {  checked: false, name: "Retailer", value: "Retailer" },
    {  checked: false, name: "Trader", value: "Trader" },
    {  checked: false, name: "Producer", value: "Producer" },
    {  checked: false, name: "Retailer", value: "Retailer" },
    {  checked: false, name: "Wholeseller", value: "Wholeseller" },
    {  checked: false, name: "NGO", value: "NGO" },
    {  checked: false, name: "Individual Buyer", value: "Individual Buyer" },
    {  checked: false, name: "Wholeseller", value: "Wholeseller" },
    {  checked: false, name: "Company Buyer", value: "Company Buyer" },
    {  checked: false, name: "Buying House", value: "Buying House" },
    {  checked: false, name: "Distribution", value: "Distribution" },
    {  checked: false, name: "Other", value: "Other" }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerSellerTypeService: ProviderSellerTypeService
  ) { }

  get f() {
    return this.sellerTypeForm.controls;
  }

  get types() {
    return this.f.types as FormArray;
  }

  ngOnInit() {
    this.buildTypeForm();
    this.updateDataIfExist();
  }

  buildTypeForm() {
    this.sellerTypeForm = this.formBuilder.group({
      types: this.formBuilder.array([])
    });
  }

  updateDataIfExist(){
    this.isLoading = true;
    this.providerSellerTypeService.getSellerTypeListByFilter(0, 1, {userId: 'pending'}).subscribe(
      (res: any) => {
        this.isDataExist = res.data.length>0;
        if(!this.isDataExist){
          this.createTypeFields([]);
          return;
        }
        this.idIfDataExist = res.data[0]['_id'];
        this.createTypeFields(res.data && res.data[0] && res.data[0].types);
      },
      (err) => {
        this.isDataExist = false;
        this.createTypeFields([]);
      },
      () => { this.isLoading = false; }
    );
  }

  createTypeFields(types: any[]){
    this.sellerTypeList.forEach(type => {
      const findType = types.find(t=>t.value===type.value);
      type.checked = findType ? true : false;
      this.addType(type);
    });
  }

  addType(type) {
    const typeForm = this.formBuilder.group({
      name: [type.name],
      value: [type.value],
      checked: [type.checked]
    });
    this.types.push(typeForm);
  }

  deleteType(typeIndex: number) {
    this.types.removeAt(typeIndex);
  }

  async subSellerTypeForm() {
    this.isLoading = true;
    if (this.sellerTypeForm.invalid) {
      this.markFormGroupTouched(this.sellerTypeForm);
      return;
    }
    const formValue = this.sellerTypeForm.value;    
    formValue.types = formValue.types.filter(t => t.checked);
    
    if(this.isDataExist){
      formValue._id = this.idIfDataExist;
      this.providerSellerTypeService.updateSellerType(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Seller Type Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Seller Type Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerSellerTypeService.addSellerType(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Seller Type Added Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Seller Type Not Added") },
        () => { this.isLoading = false; }
      );
    }
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
