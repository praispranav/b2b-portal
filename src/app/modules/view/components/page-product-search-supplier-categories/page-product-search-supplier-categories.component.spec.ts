import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductSearchSupplierCategoriesComponent } from './page-product-search-supplier-categories.component';

describe('PageProductSearchSupplierCategoriesComponent', () => {
  let component: PageProductSearchSupplierCategoriesComponent;
  let fixture: ComponentFixture<PageProductSearchSupplierCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductSearchSupplierCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductSearchSupplierCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
