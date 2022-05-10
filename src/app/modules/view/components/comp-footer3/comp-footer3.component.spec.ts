import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFooter3Component } from './comp-footer3.component';

describe('CompFooter3Component', () => {
  let component: CompFooter3Component;
  let fixture: ComponentFixture<CompFooter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFooter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFooter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
