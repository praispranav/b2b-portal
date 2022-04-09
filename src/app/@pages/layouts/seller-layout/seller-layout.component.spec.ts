import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLayoutComponent } from './seller-layout.component';

describe('SellerLayoutComponent', () => {
  let component: SellerLayoutComponent;
  let fixture: ComponentFixture<SellerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
