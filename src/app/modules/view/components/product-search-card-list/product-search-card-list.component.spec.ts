import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchCardListComponent } from './product-search-card-list.component';

describe('ProductSearchCardListComponent', () => {
  let component: ProductSearchCardListComponent;
  let fixture: ComponentFixture<ProductSearchCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
