import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMrqsComponent } from './dashboard-mrqs.component';

describe('DashboardMrqsComponent', () => {
  let component: DashboardMrqsComponent;
  let fixture: ComponentFixture<DashboardMrqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMrqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMrqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
