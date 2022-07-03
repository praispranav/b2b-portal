import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHeader3Component } from './comp-header3.component';

describe('CompHeader3Component', () => {
  let component: CompHeader3Component;
  let fixture: ComponentFixture<CompHeader3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompHeader3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompHeader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
