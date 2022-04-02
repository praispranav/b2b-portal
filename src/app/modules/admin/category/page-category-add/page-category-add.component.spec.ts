import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryAddComponent } from './page-category-add.component';

describe('PageCategoryAddComponent', () => {
  let component: PageCategoryAddComponent;
  let fixture: ComponentFixture<PageCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCategoryAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
