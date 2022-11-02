import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueProductSearchHomeComponent } from './catalogue-product-search-home.component';

describe('CatalogueProductSearchHomeComponent', () => {
  let component: CatalogueProductSearchHomeComponent;
  let fixture: ComponentFixture<CatalogueProductSearchHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueProductSearchHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueProductSearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
