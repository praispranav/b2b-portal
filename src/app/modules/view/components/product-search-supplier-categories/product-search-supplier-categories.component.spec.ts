import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchSupplierCategoriesComponent } from './product-search-supplier-categories.component';

describe('ProductSearchSupplierCategoriesComponent', () => {
  let component: ProductSearchSupplierCategoriesComponent;
  let fixture: ComponentFixture<ProductSearchSupplierCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchSupplierCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchSupplierCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
