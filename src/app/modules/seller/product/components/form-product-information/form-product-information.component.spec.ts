import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductInformationComponent } from './form-product-information.component';

describe('FormProductInformationComponent', () => {
  let component: FormProductInformationComponent;
  let fixture: ComponentFixture<FormProductInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProductInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
