import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradPreviousInquiriesComponent } from './dashborad-previous-inquiries.component';

describe('DashboradPreviousInquiriesComponent', () => {
  let component: DashboradPreviousInquiriesComponent;
  let fixture: ComponentFixture<DashboradPreviousInquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradPreviousInquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradPreviousInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
