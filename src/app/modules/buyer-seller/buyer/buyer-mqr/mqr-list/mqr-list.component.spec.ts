import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MqrListComponent } from './mqr-list.component';

describe('MqrListComponent', () => {
  let component: MqrListComponent;
  let fixture: ComponentFixture<MqrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
