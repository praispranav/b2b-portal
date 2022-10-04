import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRecommendedQuotationsComponent } from './dashboard-recommended-quotations.component';

describe('DashboardRecommendedQuotationsComponent', () => {
  let component: DashboardRecommendedQuotationsComponent;
  let fixture: ComponentFixture<DashboardRecommendedQuotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRecommendedQuotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRecommendedQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
