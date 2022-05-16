import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFindYourProductComponent } from './form-find-your-product.component';

describe('FormFindYourProductComponent', () => {
  let component: FormFindYourProductComponent;
  let fixture: ComponentFixture<FormFindYourProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFindYourProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFindYourProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
