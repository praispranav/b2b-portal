import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForVerificationComponent } from './request-for-verification.component';

describe('RequestForVerificationComponent', () => {
  let component: RequestForVerificationComponent;
  let fixture: ComponentFixture<RequestForVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestForVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
