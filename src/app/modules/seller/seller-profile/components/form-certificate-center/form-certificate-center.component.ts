import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from '../../../../../core/services/app-message.service';
import { ProviderCertificateCenterService } from '../../../../../core/providers/user/provider-certificate-center.service';

@Component({
  selector: 'app-form-certificate-center',
  templateUrl: './form-certificate-center.component.html',
  styleUrls: ['./form-certificate-center.component.scss']
})
export class FormCertificateCenterComponent implements OnInit {
  isLoading = true;
  isDataExist: boolean;
  idIfDataExist: string;
  certificateCenterForm: FormGroup;
  certificateCenterList: any[] = [
    { checked:false, expirtData: '', name: "ISO", value: "ISO" },
    { checked:false, expirtData: '', name: "BSCI", value: "BSCI" },
    { checked:false, expirtData: '', name: "SA8000", value: "SA8000" },
    { checked:false, expirtData: '', name: "Apple", value: "apple" },
    { checked:false, expirtData: '', name: "WCA", value: "WCA" },
    { checked:false, expirtData: '', name: "WRAP", value: "WRAP" },
    { checked:false, expirtData: '', name: "CE", value: "CE" },
    { checked:false, expirtData: '', name: "GRS", value: "GRS" },
    { checked:false, expirtData: '', name: "ROHS", value: "ROHS" },
    { checked:false, expirtData: '', name: "FCC", value: "FCC" },
    { checked:false, expirtData: '', name: "EMC", value: "EMC" },
    { checked:false, expirtData: '', name: "TUV MARK", value: "TUV MARK" },
    { checked:false, expirtData: '', name: "UL", value: "UL" },
    { checked:false, expirtData: '', name: "UKCA", value: "UKCA" },
    { checked:false, expirtData: '', name: "GOTS", value: "GOTS" },
    { checked:false, expirtData: '', name: "CPC", value: "CPC" },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private appMessageService: AppMessageService,
    private providerCertificateCenterService: ProviderCertificateCenterService
  ) { }

  get f() {
    return this.certificateCenterForm.controls;
  }

  get certificates() {
    return this.f.certificates as FormArray;
  }

  ngOnInit() {
    this.buildTypeForm();
    this.updateDataIfExist();
  }

  buildTypeForm() {
    this.certificateCenterForm = this.formBuilder.group({
      certificateType: [],
      certificateNumber: [],
      certificateIssuer: [],
      certificates: this.formBuilder.array([])
    });
  }

  updateDataIfExist(){
    this.isLoading = true;
    this.providerCertificateCenterService.getCertificateCenterListByFilter(0, 1, {userId: 'pending'}).subscribe(
      (res: any) => {
        this.isDataExist = true;
        this.idIfDataExist = res.data[0]['_id'];
        this.f.certificateType.setValue(res.data[0].certificateType);
        this.f.certificateNumber.setValue(res.data[0].certificateNumber);
        this.f.certificateIssuer.setValue(res.data[0].certificateIssuer);
        this.createTypeFields(res.data && res.data[0] && res.data[0].certificates);
      },
      (err) => {
        this.isDataExist = false;
        this.createTypeFields([]);
      },
      () => { this.isLoading = false; }
    );
  }

  createTypeFields(certificates: any[]){
    this.certificateCenterList.forEach(certificate => {
      const findType = certificates.find(t=>t.value===certificate.value);
      certificate.checked = findType ? true : false;
      this.addType(certificate);
    });
  }

  addType(certificate) {
    const certificateForm = this.formBuilder.group({
      name: [certificate.name],
      value: [certificate.value],
      checked: [certificate.checked],
      expirtData: [certificate.expirtData],
    });
    this.certificates.push(certificateForm);
  }

  deleteType(certificateIndex: number) {
    this.certificates.removeAt(certificateIndex);
  }

  async subCertificateCenterForm() {
    this.isLoading = true;
    if (this.certificateCenterForm.invalid) {
      this.markFormGroupTouched(this.certificateCenterForm);
      return;
    }
    const formValue = this.certificateCenterForm.value;    
    formValue.certificates = formValue.certificates.filter(t => t.checked);
    
    if(this.isDataExist){
      formValue._id = this.idIfDataExist;
      this.providerCertificateCenterService.updateCertificateCenter(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Certificate Center Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Certificate Center Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerCertificateCenterService.addCertificateCenter(formValue).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Certificate Center Added Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Certificate Center Not Added") },
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