import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerificationListComponent } from './user-verification-list.component';

describe('UserVerificationListComponent', () => {
  let component: UserVerificationListComponent;
  let fixture: ComponentFixture<UserVerificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVerificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVerificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
