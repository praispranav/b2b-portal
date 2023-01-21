import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEnquiryFormComponent } from './send-enquiry-form.component';

describe('SendEnquiryFormComponent', () => {
  let component: SendEnquiryFormComponent;
  let fixture: ComponentFixture<SendEnquiryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEnquiryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEnquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
