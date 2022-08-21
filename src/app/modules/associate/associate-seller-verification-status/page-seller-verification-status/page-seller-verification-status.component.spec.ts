import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerVerificationStatusComponent } from './page-seller-verification-status.component';

describe('PageSellerVerificationStatusComponent', () => {
  let component: PageSellerVerificationStatusComponent;
  let fixture: ComponentFixture<PageSellerVerificationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerVerificationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerVerificationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
