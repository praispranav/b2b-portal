import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMembershipAddComponent } from './page-membership-add.component';

describe('PageMembershipAddComponent', () => {
  let component: PageMembershipAddComponent;
  let fixture: ComponentFixture<PageMembershipAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMembershipAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMembershipAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
