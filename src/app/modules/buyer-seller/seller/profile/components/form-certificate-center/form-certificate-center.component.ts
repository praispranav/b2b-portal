import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMessageService } from '../../../../../../core/services/app-message.service';
import { ProviderCertificateCenterService } from '../../../../../../core/providers/user/provider-certificate-center.service';
import { Subscription } from 'rxjs';

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
  formGroup: FormGroup;
  certificateArray: FormArray = new FormArray([]);
  imageList: any[] = [];
  certificateProfiles: any[] = [];
  serviceSubscription: Subscription[] = [];

  certificateCenterList: any[] = [
    { checked: false, expirtData: '', name: "ISO", value: "ISO" },
    { checked: false, expirtData: '', name: "BSCI", value: "BSCI" },
    { checked: false, expirtData: '', name: "SA8000", value: "SA8000" },
    { checked: false, expirtData: '', name: "Apple", value: "apple" },
    { checked: false, expirtData: '', name: "WCA", value: "WCA" },
    { checked: false, expirtData: '', name: "WRAP", value: "WRAP" },
    { checked: false, expirtData: '', name: "CE", value: "CE" },
    { checked: false, expirtData: '', name: "GRS", value: "GRS" },
    { checked: false, expirtData: '', name: "ROHS", value: "ROHS" },
    { checked: false, expirtData: '', name: "FCC", value: "FCC" },
    { checked: false, expirtData: '', name: "EMC", value: "EMC" },
    { checked: false, expirtData: '', name: "TUV MARK", value: "TUV MARK" },
    { checked: false, expirtData: '', name: "UL", value: "UL" },
    { checked: false, expirtData: '', name: "UKCA", value: "UKCA" },
    { checked: false, expirtData: '', name: "GOTS", value: "GOTS" },
    { checked: false, expirtData: '', name: "CPC", value: "CPC" },
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
    this.addNewCertificate("");
    this.serviceSubscription.push(
      this.certificateArray.valueChanges.pipe().subscribe(() => {
        this.certificateProfiles = this.certificateArray.controls
          .filter((control) => {
            return control.valid;
          })
          .map((control) => control.value);
      })
    );
  }

  buildTypeForm() {
    this.certificateCenterForm = this.formBuilder.group({

      certificates: this.formBuilder.array([])
    });
  }
  addNewCertificate(data: any = {}): void {
    this.formGroup = this.formBuilder.group({
      certificateType: [data.certificateType ? data.certificateType : "", [Validators.required]],
      certificateNumber: [data.certificateNumber ? data.certificateNumber : "", [Validators.required]],
      certificateIssuer: [data.certificateIssuer ? data.certificateIssuer : "", [Validators.required]],
      image: [data.image ? data.image : ""],

    });
    this.certificateArray.push(this.formGroup);

  }
  removeCertificate(index: number): void {
    this.certificateArray.removeAt(index);
  }
  updateDataIfExist() {
    this.isLoading = true;
    this.providerCertificateCenterService.getCertificateCenterListByFilter(0, 1, { userId: 'pending' }).subscribe(
      (res: any) => {
        let patchFormvalue: any = res.data[0];
        this.isDataExist = res.data.length > 0;
        if (!this.isDataExist) {
          this.createTypeFields([]);
          return;
        }
        this.idIfDataExist = res.data[0]['_id'];
        this.certificateCenterForm.patchValue({
          createTypeFields: patchFormvalue.createTypeFields ? patchFormvalue.createTypeFields : '',

        })
        patchFormvalue.otherCertificates.forEach(element => {
          this.addNewCertificate(element);
        })

      },
      (err) => {
        this.isDataExist = false;
        this.createTypeFields([]);
      },
      () => { this.isLoading = false; }
    );
  }

  createTypeFields(certificates: any[]) {

    this.certificateCenterList.forEach(certificate => {
      const findType = certificates.find(t => t.value === certificate.value);
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
    if (this.imageList.length > 0) {
      this.f.image.setValue(
        await this.toBase64(this.imageList[0].originFileObj)
      );
    }
    if (this.certificateCenterForm.invalid) {
      this.markFormGroupTouched(this.certificateCenterForm);
      return;
    }
    this.isLoading = true;
    const formData = this.certificateCenterForm.value;
    let reqObj = {
      certificates: formData.certificates ? formData.certificates : '',
      otherCertificates: [...this.certificateProfiles],

    }
    console.log('reqData', reqObj);

    formData.certificates = formData.certificates.filter(t => t.checked);

    if (this.isDataExist) {
      formData._id = this.idIfDataExist;
      this.providerCertificateCenterService.updateCertificateCenter(reqObj).subscribe(
        (res) => { this.appMessageService.createBasicNotification('success', "Certificate Center Updated Successfully") },
        (err) => { this.appMessageService.createBasicNotification('success', "Certificate Center Not Updated") },
        () => { this.isLoading = false; }
      );
    } else {
      this.providerCertificateCenterService.addCertificateCenter(reqObj).subscribe(
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
  async toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}