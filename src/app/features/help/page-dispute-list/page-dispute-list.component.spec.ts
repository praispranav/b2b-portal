import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDisputeListComponent } from './page-dispute-list.component';

describe('PageDisputeListComponent', () => {
  let component: PageDisputeListComponent;
  let fixture: ComponentFixture<PageDisputeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDisputeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDisputeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
