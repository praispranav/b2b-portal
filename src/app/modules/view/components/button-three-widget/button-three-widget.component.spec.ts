import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonThreeWidgetComponent } from './button-three-widget.component';

describe('ButtonThreeWidgetComponent', () => {
  let component: ButtonThreeWidgetComponent;
  let fixture: ComponentFixture<ButtonThreeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonThreeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonThreeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
