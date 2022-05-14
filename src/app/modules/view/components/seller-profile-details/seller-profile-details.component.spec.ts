import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProfileDetailsComponent } from './seller-profile-details.component';

describe('SellerProfileDetailsComponent', () => {
  let component: SellerProfileDetailsComponent;
  let fixture: ComponentFixture<SellerProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
