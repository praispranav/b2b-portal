import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAccountListComponent } from './assign-account-list.component';

describe('AssignAccountListComponent', () => {
  let component: AssignAccountListComponent;
  let fixture: ComponentFixture<AssignAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
