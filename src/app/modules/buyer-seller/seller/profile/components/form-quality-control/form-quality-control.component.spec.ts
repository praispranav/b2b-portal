import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQualityControlComponent } from './form-quality-control.component';

describe('FormQualityControlComponent', () => {
  let component: FormQualityControlComponent;
  let fixture: ComponentFixture<FormQualityControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormQualityControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQualityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
