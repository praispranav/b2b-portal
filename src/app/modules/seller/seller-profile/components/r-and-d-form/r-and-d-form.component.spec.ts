import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RAndDFormComponent } from './r-and-d-form.component';

describe('RAndDFormComponent', () => {
  let component: RAndDFormComponent;
  let fixture: ComponentFixture<RAndDFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RAndDFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RAndDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
