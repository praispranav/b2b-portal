import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogAddComponent } from './page-blog-add.component';

describe('PageBlogAddComponent', () => {
  let component: PageBlogAddComponent;
  let fixture: ComponentFixture<PageBlogAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBlogAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
