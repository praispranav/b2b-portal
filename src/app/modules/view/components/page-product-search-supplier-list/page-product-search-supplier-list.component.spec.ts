import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductSearchSupplierListComponent } from './page-product-search-supplier-list.component';

describe('PageProductSearchSupplierListComponent', () => {
  let component: PageProductSearchSupplierListComponent;
  let fixture: ComponentFixture<PageProductSearchSupplierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductSearchSupplierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductSearchSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
