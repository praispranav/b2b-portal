import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupplierMyListingComponent } from './page-supplier-my-listing.component';

describe('PageSupplierMyListingComponent', () => {
  let component: PageSupplierMyListingComponent;
  let fixture: ComponentFixture<PageSupplierMyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSupplierMyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSupplierMyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
