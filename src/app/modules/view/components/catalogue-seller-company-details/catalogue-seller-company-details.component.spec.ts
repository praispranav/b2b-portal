import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueSellerCompanyDetailsComponent } from './catalogue-seller-company-details.component';

describe('CatalogueSellerCompanyDetailsComponent', () => {
  let component: CatalogueSellerCompanyDetailsComponent;
  let fixture: ComponentFixture<CatalogueSellerCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueSellerCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueSellerCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
