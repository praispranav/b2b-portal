import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSentComponent } from './page-sent.component';

describe('PageSentComponent', () => {
  let component: PageSentComponent;
  let fixture: ComponentFixture<PageSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
