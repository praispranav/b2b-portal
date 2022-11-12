import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuyerSellersAdminComponent } from './page-buyer-sellers-admin.component';

describe('PageBuyerSellersAdminComponent', () => {
  let component: PageBuyerSellersAdminComponent;
  let fixture: ComponentFixture<PageBuyerSellersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBuyerSellersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBuyerSellersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
