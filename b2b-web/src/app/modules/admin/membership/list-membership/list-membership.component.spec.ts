import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMembershipComponent } from './list-membership.component';

describe('ListMembershipComponent', () => {
  let component: ListMembershipComponent;
  let fixture: ComponentFixture<ListMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
