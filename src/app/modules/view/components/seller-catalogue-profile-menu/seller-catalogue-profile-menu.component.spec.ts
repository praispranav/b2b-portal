import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCatalogueProfileMenuComponent } from './seller-catalogue-profile-menu.component';

describe('SellerCatalogueProfileMenuComponent', () => {
  let component: SellerCatalogueProfileMenuComponent;
  let fixture: ComponentFixture<SellerCatalogueProfileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerCatalogueProfileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCatalogueProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
