import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopSellingCategoriesComponent } from './home-top-selling-categories.component';

describe('HomeTopSellingCategoriesComponent', () => {
  let component: HomeTopSellingCategoriesComponent;
  let fixture: ComponentFixture<HomeTopSellingCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopSellingCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopSellingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
