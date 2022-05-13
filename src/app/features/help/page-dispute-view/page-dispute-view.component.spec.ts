import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisputeViewComponent } from './page-dispute-view.component';

describe('PageDisputeViewComponent', () => {
  let component: PageDisputeViewComponent;
  let fixture: ComponentFixture<PageDisputeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDisputeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisputeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
