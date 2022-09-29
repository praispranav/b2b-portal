import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchSupplierListComponent } from './product-search-supplier-list.component';

describe('ProductSearchSupplierListComponent', () => {
  let component: ProductSearchSupplierListComponent;
  let fixture: ComponentFixture<ProductSearchSupplierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchSupplierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
