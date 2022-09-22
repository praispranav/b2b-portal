import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousInquiriesComponent } from './previous-inquiries.component';

describe('PreviousInquiriesComponent', () => {
  let component: PreviousInquiriesComponent;
  let fixture: ComponentFixture<PreviousInquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousInquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
