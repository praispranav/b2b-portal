import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHeader1Component } from './comp-header1.component';

describe('CompHeader1Component', () => {
  let component: CompHeader1Component;
  let fixture: ComponentFixture<CompHeader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompHeader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
