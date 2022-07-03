import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerCatalogueProductComponent } from './page-seller-catalogue-product.component';

describe('PageSellerCatalogueProductComponent', () => {
  let component: PageSellerCatalogueProductComponent;
  let fixture: ComponentFixture<PageSellerCatalogueProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerCatalogueProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerCatalogueProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
