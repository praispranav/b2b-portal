import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerCatalogueManageGuideComponent } from './page-seller-catalogue-manage-guide.component';

describe('PageSellerCatalogueManageGuideComponent', () => {
  let component: PageSellerCatalogueManageGuideComponent;
  let fixture: ComponentFixture<PageSellerCatalogueManageGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerCatalogueManageGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerCatalogueManageGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
