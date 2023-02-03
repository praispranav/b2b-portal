import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateProfileListComponent } from './associate-profile-list.component';

describe('AssociateProfileListComponent', () => {
  let component: AssociateProfileListComponent;
  let fixture: ComponentFixture<AssociateProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
