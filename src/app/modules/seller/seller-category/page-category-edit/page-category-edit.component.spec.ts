import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoryEditComponent } from './page-category-edit.component';

describe('PageCategoryEditComponent', () => {
  let component: PageCategoryEditComponent;
  let fixture: ComponentFixture<PageCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCategoryEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
