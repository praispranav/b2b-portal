import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHeader4Component } from './comp-header4.component';

describe('CompHeader4Component', () => {
  let component: CompHeader4Component;
  let fixture: ComponentFixture<CompHeader4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompHeader4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompHeader4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
