import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMembershipListComponent } from './page-membership-list.component';

describe('PageMembershipListComponent', () => {
  let component: PageMembershipListComponent;
  let fixture: ComponentFixture<PageMembershipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMembershipListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMembershipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
