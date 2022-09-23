import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePoliciesNRulesComponent } from './page-policies-n-rules.component';

describe('PagePoliciesNRulesComponent', () => {
  let component: PagePoliciesNRulesComponent;
  let fixture: ComponentFixture<PagePoliciesNRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePoliciesNRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePoliciesNRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
