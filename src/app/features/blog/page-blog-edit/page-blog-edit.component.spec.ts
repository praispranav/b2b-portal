import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogEditComponent } from './page-blog-edit.component';

describe('PageBlogEditComponent', () => {
  let component: PageBlogEditComponent;
  let fixture: ComponentFixture<PageBlogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBlogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
