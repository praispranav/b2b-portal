import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedRfqComponent } from './received-rfq.component';

describe('ReceivedRfqComponent', () => {
  let component: ReceivedRfqComponent;
  let fixture: ComponentFixture<ReceivedRfqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedRfqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
