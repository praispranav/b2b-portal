import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAssociateComponent } from './verify-associate.component';

describe('VerifyAssociateComponent', () => {
  let component: VerifyAssociateComponent;
  let fixture: ComponentFixture<VerifyAssociateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyAssociateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
