import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPreviousInquiriesComponent } from './dashboard-previous-inquiries.component';

describe('DashboardPreviousInquiriesComponent', () => {
  let component: DashboardPreviousInquiriesComponent;
  let fixture: ComponentFixture<DashboardPreviousInquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPreviousInquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPreviousInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
