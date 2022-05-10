import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFooter1Component } from './comp-footer1.component';

describe('CompFooter1Component', () => {
  let component: CompFooter1Component;
  let fixture: ComponentFixture<CompFooter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFooter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFooter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
