import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComplainViewComponent } from './page-complain-view.component';

describe('PageComplainViewComponent', () => {
  let component: PageComplainViewComponent;
  let fixture: ComponentFixture<PageComplainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComplainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComplainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
