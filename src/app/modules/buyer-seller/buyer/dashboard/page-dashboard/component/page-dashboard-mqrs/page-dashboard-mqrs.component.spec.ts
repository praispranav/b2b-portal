import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashboardMqrsComponent } from './page-dashboard-mqrs.component';

describe('PageDashboardMqrsComponent', () => {
  let component: PageDashboardMqrsComponent;
  let fixture: ComponentFixture<PageDashboardMqrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDashboardMqrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDashboardMqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
