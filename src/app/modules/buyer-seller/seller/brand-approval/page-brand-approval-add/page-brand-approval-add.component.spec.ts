import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBrandApprovalAddComponent } from './page-brand-approval-add.component';

describe('PageBrandApprovalAddComponent', () => {
  let component: PageBrandApprovalAddComponent;
  let fixture: ComponentFixture<PageBrandApprovalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageBrandApprovalAddComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBrandApprovalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});








