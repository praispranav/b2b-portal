import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedRfqComponent } from './requested-rfq.component';

describe('RequestedRfqComponent', () => {
  let component: RequestedRfqComponent;
  let fixture: ComponentFixture<RequestedRfqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedRfqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
