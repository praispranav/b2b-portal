import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueProductCardHomeComponent } from './catalogue-product-card-home.component';

describe('CatalogueProductCardHomeComponent', () => {
  let component: CatalogueProductCardHomeComponent;
  let fixture: ComponentFixture<CatalogueProductCardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueProductCardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueProductCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
