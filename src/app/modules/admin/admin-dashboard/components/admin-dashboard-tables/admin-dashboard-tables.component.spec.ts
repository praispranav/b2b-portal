import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardTablesComponent } from './admin-dashboard-tables.component';

describe('AdminDashboardTablesComponent', () => {
  let component: AdminDashboardTablesComponent;
  let fixture: ComponentFixture<AdminDashboardTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
