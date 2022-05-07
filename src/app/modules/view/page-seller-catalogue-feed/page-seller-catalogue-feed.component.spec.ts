import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellerCatalogueFeedComponent } from './page-seller-catalogue-feed.component';

describe('PageSellerCatalogueFeedComponent', () => {
  let component: PageSellerCatalogueFeedComponent;
  let fixture: ComponentFixture<PageSellerCatalogueFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellerCatalogueFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellerCatalogueFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
