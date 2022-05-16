import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryListComponent } from './page-category-list.component';

describe('PageCategoryListComponent', () => {
  let component: PageCategoryListComponent;
  let fixture: ComponentFixture<PageCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCategoryListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
