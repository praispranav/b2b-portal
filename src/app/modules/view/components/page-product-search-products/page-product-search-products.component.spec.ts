import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductSearchProductsComponent } from './page-product-search-products.component';

describe('PageProductSearchProductsComponent', () => {
  let component: PageProductSearchProductsComponent;
  let fixture: ComponentFixture<PageProductSearchProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductSearchProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductSearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
