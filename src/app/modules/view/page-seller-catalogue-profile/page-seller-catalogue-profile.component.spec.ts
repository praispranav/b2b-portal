import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerCatalogueProfileComponent } from './page-seller-catalogue-profile.component';

describe('PageSellerCatalogueProfileComponent', () => {
  let component: PageSellerCatalogueProfileComponent;
  let fixture: ComponentFixture<PageSellerCatalogueProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerCatalogueProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerCatalogueProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
