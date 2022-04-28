import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCenterComponent } from './certificate-center.component';

describe('CertificateCenterComponent', () => {
  let component: CertificateCenterComponent;
  let fixture: ComponentFixture<CertificateCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
