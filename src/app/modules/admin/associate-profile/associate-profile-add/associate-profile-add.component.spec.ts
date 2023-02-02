import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateProfileAddComponent } from './associate-profile-add.component';

describe('AssociateProfileAddComponent', () => {
  let component: AssociateProfileAddComponent;
  let fixture: ComponentFixture<AssociateProfileAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateProfileAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateProfileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
