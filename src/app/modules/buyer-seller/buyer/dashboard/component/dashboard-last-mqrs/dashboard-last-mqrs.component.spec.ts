import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLastMqrsComponent } from './dashboard-last-mqrs.component';

describe('DashboardLastMqrsComponent', () => {
  let component: DashboardLastMqrsComponent;
  let fixture: ComponentFixture<DashboardLastMqrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLastMqrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLastMqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
