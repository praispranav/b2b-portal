import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStatusListComponent } from './account-status-list.component';

describe('AccountStatusListComponent', () => {
  let component: AccountStatusListComponent;
  let fixture: ComponentFixture<AccountStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
