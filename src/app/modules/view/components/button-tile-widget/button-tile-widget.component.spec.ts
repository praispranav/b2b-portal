import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTileWidgetComponent } from './button-tile-widget.component';

describe('ButtonTileWidgetComponent', () => {
  let component: ButtonTileWidgetComponent;
  let fixture: ComponentFixture<ButtonTileWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTileWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
