import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchCategoriesComponent } from './product-search-categories.component';

describe('ProductSearchCategoriesComponent', () => {
  let component: ProductSearchCategoriesComponent;
  let fixture: ComponentFixture<ProductSearchCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
