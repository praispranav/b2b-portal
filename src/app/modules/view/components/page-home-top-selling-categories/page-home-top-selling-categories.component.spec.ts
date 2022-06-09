import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeTopSellingCategoriesComponent } from './page-home-top-selling-categories.component';

describe('PageHomeTopSellingCategoriesComponent', () => {
  let component: PageHomeTopSellingCategoriesComponent;
  let fixture: ComponentFixture<PageHomeTopSellingCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeTopSellingCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeTopSellingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
