import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTermsAndConditionComponent } from './page-terms-and-condition.component';

describe('PageTermsAndConditionComponent', () => {
  let component: PageTermsAndConditionComponent;
  let fixture: ComponentFixture<PageTermsAndConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTermsAndConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTermsAndConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
