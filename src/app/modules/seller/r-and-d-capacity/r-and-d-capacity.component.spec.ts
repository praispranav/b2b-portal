import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAndDCapacityComponent } from './r-and-d-capacity.component';

describe('RAndDCapacityComponent', () => {
  let component: RAndDCapacityComponent;
  let fixture: ComponentFixture<RAndDCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAndDCapacityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RAndDCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
