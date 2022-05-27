import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerCatalogueProfileMenuComponent } from './page-seller-catalogue-profile-menu.component';

describe('PageSellerCatalogueProfileMenuComponent', () => {
  let component: PageSellerCatalogueProfileMenuComponent;
  let fixture: ComponentFixture<PageSellerCatalogueProfileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerCatalogueProfileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerCatalogueProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
