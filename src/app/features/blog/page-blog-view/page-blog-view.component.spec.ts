import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogViewComponent } from './page-blog-view.component';

describe('PageBlogViewComponent', () => {
  let component: PageBlogViewComponent;
  let fixture: ComponentFixture<PageBlogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBlogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
