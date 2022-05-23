import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCertificateCenterComponent } from './form-certificate-center.component';

describe('FormCertificateCenterComponent', () => {
  let component: FormCertificateCenterComponent;
  let fixture: ComponentFixture<FormCertificateCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCertificateCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCertificateCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
