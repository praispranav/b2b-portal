import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryViewComponent } from './page-category-view.component';

describe('PageCategoryViewComponent', () => {
  let component: PageCategoryViewComponent;
  let fixture: ComponentFixture<PageCategoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCategoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
