import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradTableComponent } from './dashborad-table.component';

describe('DashboradTableComponent', () => {
  let component: DashboradTableComponent;
  let fixture: ComponentFixture<DashboradTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
