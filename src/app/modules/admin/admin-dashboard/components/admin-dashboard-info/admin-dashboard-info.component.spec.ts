import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardInfoComponent } from './admin-dashboard-info.component';

describe('AdminDashboardInfoComponent', () => {
  let component: AdminDashboardInfoComponent;
  let fixture: ComponentFixture<AdminDashboardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
