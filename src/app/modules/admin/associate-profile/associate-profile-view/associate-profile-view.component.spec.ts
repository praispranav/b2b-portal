import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateProfileViewComponent } from './associate-profile-view.component';

describe('AssociateProfileViewComponent', () => {
  let component: AssociateProfileViewComponent;
  let fixture: ComponentFixture<AssociateProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
