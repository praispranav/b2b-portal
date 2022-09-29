import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewMessageSupplierComponent } from './product-view-message-supplier.component';

describe('ProductViewMessageSupplierComponent', () => {
  let component: ProductViewMessageSupplierComponent;
  let fixture: ComponentFixture<ProductViewMessageSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewMessageSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewMessageSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
