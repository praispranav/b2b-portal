import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAssociateRequestForSellerVerificationComponent } from './page-associate-request-for-seller-verification.component';

describe('PageAssociateRequestForSellerVerificationComponent', () => {
  let component: PageAssociateRequestForSellerVerificationComponent;
  let fixture: ComponentFixture<PageAssociateRequestForSellerVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAssociateRequestForSellerVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAssociateRequestForSellerVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
