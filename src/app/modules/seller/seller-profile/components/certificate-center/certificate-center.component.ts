import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-certificate-center',
  templateUrl: './certificate-center.component.html',
  styleUrls: ['./certificate-center.component.scss']
})
export class CertificateCenterComponent implements OnInit {
  certificateForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  get f() {
    return this.certificateForm.controls;
  }
  ngOnInit() {
    this.buildCertificateForm();
  }

  Data: Array<any> = [
    { name: 'ISO', value: 'ISO' },
    { name: 'BSCI', value: 'BSCI' },
    { name: 'SA8000', value: 'SA8000' },
    { name: 'Apple', value: 'apple' },
    { name: 'WCA', value: 'WCA' },
    { name: 'WRAP', value: 'WRAP' },
    { name: 'CE', value: 'CE' },
    { name: 'GRS', value: 'GRS' },
    { name: 'ROHS', value: 'ROHS' },
    { name: 'FCC', value: 'FCC' },
    { name: 'EMC', value: 'EMC' },
    { name: 'TUV MARK', value: 'TUV MARK' },
    { name: 'UL', value: 'UL' },
    { name: 'UKCA', value: 'UKCA' },
    { name: 'GOTS', value: 'GOTS' },
    { name: 'CPC', value: 'CPC' }

  ];
  buildCertificateForm() {
    this.certificateForm = this.formBuilder.group({

    })
  }
}
