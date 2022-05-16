import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFooter2Component } from './comp-footer2.component';

describe('CompFooter2Component', () => {
  let component: CompFooter2Component;
  let fixture: ComponentFixture<CompFooter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFooter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFooter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
