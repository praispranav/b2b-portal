import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductSearchSupplierComponent } from './page-product-search-supplier.component';

describe('PageProductSearchSupplierComponent', () => {
  let component: PageProductSearchSupplierComponent;
  let fixture: ComponentFixture<PageProductSearchSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductSearchSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductSearchSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
