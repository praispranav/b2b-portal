import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnayProfileComponent } from './compnay-profile.component';

describe('CompnayProfileComponent', () => {
  let component: CompnayProfileComponent;
  let fixture: ComponentFixture<CompnayProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompnayProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnayProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
