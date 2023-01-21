import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedProductsComponent } from './shortlisted-products.component';

describe('ShortlistedProductsComponent', () => {
  let component: ShortlistedProductsComponent;
  let fixture: ComponentFixture<ShortlistedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
