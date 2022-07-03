import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShippingDetailsComponent } from './form-shipping-details.component';

describe('FormShippingDetailsComponent', () => {
  let component: FormShippingDetailsComponent;
  let fixture: ComponentFixture<FormShippingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormShippingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShippingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
