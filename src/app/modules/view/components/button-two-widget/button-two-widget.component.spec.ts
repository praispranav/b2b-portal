import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTwoWidgetComponent } from './button-two-widget.component';

describe('ButtonTwoWidgetComponent', () => {
  let component: ButtonTwoWidgetComponent;
  let fixture: ComponentFixture<ButtonTwoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTwoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTwoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
