import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCompnyDetailComponent } from './form-compny-detail.component';

describe('FormCompnyDetailComponent', () => {
  let component: FormCompnyDetailComponent;
  let fixture: ComponentFixture<FormCompnyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompnyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompnyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
