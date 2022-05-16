import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBrandApprovalViewComponent } from './page-brand-approval-view.component';

describe('PageBrandApprovalViewComponent', () => {
  let component: PageBrandApprovalViewComponent;
  let fixture: ComponentFixture<PageBrandApprovalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBrandApprovalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBrandApprovalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
