import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBrandApprovalListComponent } from './page-brand-approval-list.component';

describe('PageBrandApprovalListComponent', () => {
  let component: PageBrandApprovalListComponent;
  let fixture: ComponentFixture<PageBrandApprovalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBrandApprovalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBrandApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
