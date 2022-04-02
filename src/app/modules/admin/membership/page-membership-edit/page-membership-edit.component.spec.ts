import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMembershipEditComponent } from './page-membership-edit.component';

describe('PageMembershipEditComponent', () => {
  let component: PageMembershipEditComponent;
  let fixture: ComponentFixture<PageMembershipEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMembershipEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMembershipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
