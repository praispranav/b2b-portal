import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompanyDetailComponent } from './form-company-detail.component';

describe('FormCompanyDetailComponent', () => {
  let component: FormCompanyDetailComponent;
  let fixture: ComponentFixture<FormCompanyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompanyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
