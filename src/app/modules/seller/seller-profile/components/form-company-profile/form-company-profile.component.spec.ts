import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompanyProfileComponent } from './form-company-profile.component';

describe('FormCompanyProfileComponent', () => {
  let component: FormCompanyProfileComponent;
  let fixture: ComponentFixture<FormCompanyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompanyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
