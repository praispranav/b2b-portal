import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRAndDComponent } from './form-r-and-d.component';

describe('FormRAndDComponent', () => {
  let component: FormRAndDComponent;
  let fixture: ComponentFixture<FormRAndDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRAndDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRAndDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
