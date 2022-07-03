import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFourWidgetComponent } from './button-four-widget.component';

describe('ButtonFourWidgetComponent', () => {
  let component: ButtonFourWidgetComponent;
  let fixture: ComponentFixture<ButtonFourWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFourWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFourWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
