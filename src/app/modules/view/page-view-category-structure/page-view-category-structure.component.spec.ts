import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewCategoryStructureComponent } from './page-view-category-structure.component';

describe('PageViewCategoryStructureComponent', () => {
  let component: PageViewCategoryStructureComponent;
  let fixture: ComponentFixture<PageViewCategoryStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViewCategoryStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewCategoryStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
