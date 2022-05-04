import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExportCapabilityComponent } from './form-export-capability.component';

describe('FormExportCapabilityComponent', () => {
  let component: FormExportCapabilityComponent;
  let fixture: ComponentFixture<FormExportCapabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExportCapabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExportCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
