import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedQuotationsComponent } from './recommended-quotations.component';

describe('RecommendedQuotationsComponent', () => {
  let component: RecommendedQuotationsComponent;
  let fixture: ComponentFixture<RecommendedQuotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedQuotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
