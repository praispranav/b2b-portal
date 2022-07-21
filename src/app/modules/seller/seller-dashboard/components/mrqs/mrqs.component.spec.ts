import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrqsComponent } from './mrqs.component';

describe('MrqsComponent', () => {
  let component: MrqsComponent;
  let fixture: ComponentFixture<MrqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
