import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeCategoriesComponent } from './page-home-categories.component';

describe('PageHomeCategoriesComponent', () => {
  let component: PageHomeCategoriesComponent;
  let fixture: ComponentFixture<PageHomeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
