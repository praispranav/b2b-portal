import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerCatalogueHomeComponent } from './page-seller-catalogue-home.component';

describe('PageSellerCatalogueHomeComponent', () => {
  let component: PageSellerCatalogueHomeComponent;
  let fixture: ComponentFixture<PageSellerCatalogueHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerCatalogueHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerCatalogueHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
