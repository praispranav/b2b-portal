import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAvailableProductCustomizationComponent } from './home-available-product-customization.component';

describe('HomeAvailableProductCustomizationComponent', () => {
  let component: HomeAvailableProductCustomizationComponent;
  let fixture: ComponentFixture<HomeAvailableProductCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAvailableProductCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAvailableProductCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
