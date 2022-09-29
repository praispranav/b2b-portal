import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchSupplierComponent } from './product-search-supplier.component';

describe('ProductSearchSupplierComponent', () => {
  let component: ProductSearchSupplierComponent;
  let fixture: ComponentFixture<ProductSearchSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
