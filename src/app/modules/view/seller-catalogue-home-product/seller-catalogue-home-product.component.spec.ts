import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCatalogueHomeProductComponent } from './seller-catalogue-home-product.component';

describe('SellerCatalogueHomeProductComponent', () => {
  let component: SellerCatalogueHomeProductComponent;
  let fixture: ComponentFixture<SellerCatalogueHomeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerCatalogueHomeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCatalogueHomeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
