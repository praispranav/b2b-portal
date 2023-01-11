import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandApprovalListComponent } from './brand-approval-list.component';

describe('BrandApprovalListComponent', () => {
  let component: BrandApprovalListComponent;
  let fixture: ComponentFixture<BrandApprovalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandApprovalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
