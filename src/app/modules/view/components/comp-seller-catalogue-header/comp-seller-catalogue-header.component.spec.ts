import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSellerCatalogueHeaderComponent } from './comp-seller-catalogue-header.component';

describe('CompSellerCatalogueHeaderComponent', () => {
  let component: CompSellerCatalogueHeaderComponent;
  let fixture: ComponentFixture<CompSellerCatalogueHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSellerCatalogueHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSellerCatalogueHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
