import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTradeInformationComponent } from './form-trade-information.component';

describe('FormTradeInformationComponent', () => {
  let component: FormTradeInformationComponent;
  let fixture: ComponentFixture<FormTradeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTradeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTradeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
