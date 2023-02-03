import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAcoountListComponent } from './verify-acoount-list.component';

describe('VerifyAcoountListComponent', () => {
  let component: VerifyAcoountListComponent;
  let fixture: ComponentFixture<VerifyAcoountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyAcoountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyAcoountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
