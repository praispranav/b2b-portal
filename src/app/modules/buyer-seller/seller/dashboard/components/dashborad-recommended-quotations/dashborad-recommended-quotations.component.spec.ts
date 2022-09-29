import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradRecommendedQuotationsComponent } from './dashborad-recommended-quotations.component';

describe('DashboradRecommendedQuotationsComponent', () => {
  let component: DashboradRecommendedQuotationsComponent;
  let fixture: ComponentFixture<DashboradRecommendedQuotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradRecommendedQuotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradRecommendedQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
