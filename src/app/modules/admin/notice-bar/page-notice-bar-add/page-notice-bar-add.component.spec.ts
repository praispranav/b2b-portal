import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticeBarAddComponent } from './page-notice-bar-add.component';

describe('PageNoticeBarAddComponent', () => {
  let component: PageNoticeBarAddComponent;
  let fixture: ComponentFixture<PageNoticeBarAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNoticeBarAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticeBarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
