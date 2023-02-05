import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouPageConfirmSupplierForCatalogingComponent } from './thankyou-page-confirm-supplier-for-cataloging.component';

describe('ThankyouPageConfirmSupplierForCatalogingComponent', () => {
  let component: ThankyouPageConfirmSupplierForCatalogingComponent;
  let fixture: ComponentFixture<ThankyouPageConfirmSupplierForCatalogingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouPageConfirmSupplierForCatalogingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouPageConfirmSupplierForCatalogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
