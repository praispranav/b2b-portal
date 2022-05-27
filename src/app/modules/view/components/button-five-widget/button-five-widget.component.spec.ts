import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFiveWidgetComponent } from './button-five-widget.component';

describe('ButtonFiveWidgetComponent', () => {
  let component: ButtonFiveWidgetComponent;
  let fixture: ComponentFixture<ButtonFiveWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFiveWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFiveWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
