import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeAvailableProductCustomizationComponent } from './page-home-available-product-customization.component';

describe('PageHomeAvailableProductCustomizationComponent', () => {
  let component: PageHomeAvailableProductCustomizationComponent;
  let fixture: ComponentFixture<PageHomeAvailableProductCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeAvailableProductCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeAvailableProductCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
