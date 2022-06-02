import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductViewMessageSupplierComponent } from './page-product-view-message-supplier.component';

describe('PageProductViewMessageSupplierComponent', () => {
  let component: PageProductViewMessageSupplierComponent;
  let fixture: ComponentFixture<PageProductViewMessageSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductViewMessageSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductViewMessageSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
