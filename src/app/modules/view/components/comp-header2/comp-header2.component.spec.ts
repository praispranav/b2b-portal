import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHeader2Component } from './comp-header2.component';

describe('CompHeader2Component', () => {
  let component: CompHeader2Component;
  let fixture: ComponentFixture<CompHeader2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompHeader2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
