import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradMrqsComponent } from './dashborad-mrqs.component';

describe('DashboradMrqsComponent', () => {
  let component: DashboradMrqsComponent;
  let fixture: ComponentFixture<DashboradMrqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradMrqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradMrqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
