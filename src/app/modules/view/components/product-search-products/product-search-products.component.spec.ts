import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchProductsComponent } from './product-search-products.component';

describe('ProductSearchProductsComponent', () => {
  let component: ProductSearchProductsComponent;
  let fixture: ComponentFixture<ProductSearchProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
