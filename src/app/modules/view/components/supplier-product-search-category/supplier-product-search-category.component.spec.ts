import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierProductSearchCategoryComponent } from './supplier-product-search-category.component';

describe('SupplierProductSearchCategoryComponent', () => {
  let component: SupplierProductSearchCategoryComponent;
  let fixture: ComponentFixture<SupplierProductSearchCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierProductSearchCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierProductSearchCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
