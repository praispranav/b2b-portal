import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductViewDetailsComponent } from './page-product-view-details.component';

describe('PageProductViewDetailsComponent', () => {
  let component: PageProductViewDetailsComponent;
  let fixture: ComponentFixture<PageProductViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
