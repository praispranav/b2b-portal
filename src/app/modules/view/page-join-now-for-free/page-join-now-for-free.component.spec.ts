import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJoinNowForFreeComponent } from './page-join-now-for-free.component';

describe('PageJoinNowForFreeComponent', () => {
  let component: PageJoinNowForFreeComponent;
  let fixture: ComponentFixture<PageJoinNowForFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJoinNowForFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJoinNowForFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
