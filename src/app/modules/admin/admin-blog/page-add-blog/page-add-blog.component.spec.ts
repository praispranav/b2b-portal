import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddBlogComponent } from './page-add-blog.component';

describe('PageAddBlogComponent', () => {
  let component: PageAddBlogComponent;
  let fixture: ComponentFixture<PageAddBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
