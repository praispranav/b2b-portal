import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerCatalogueContactComponent } from './page-seller-catalogue-contact.component';

describe('PageSellerCatalogueContactComponent', () => {
  let component: PageSellerCatalogueContactComponent;
  let fixture: ComponentFixture<PageSellerCatalogueContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerCatalogueContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerCatalogueContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
