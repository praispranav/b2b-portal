import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerificationVewComponent } from './user-verification-vew.component';

describe('UserVerificationVewComponent', () => {
  let component: UserVerificationVewComponent;
  let fixture: ComponentFixture<UserVerificationVewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVerificationVewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVerificationVewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
