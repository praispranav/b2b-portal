import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSellerTypeComponent } from './form-seller-type.component';

describe('FormSellerTypeComponent', () => {
  let component: FormSellerTypeComponent;
  let fixture: ComponentFixture<FormSellerTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSellerTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSellerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
