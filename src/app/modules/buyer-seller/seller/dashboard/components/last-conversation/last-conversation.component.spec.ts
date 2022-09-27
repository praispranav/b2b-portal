import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastConversationComponent } from './last-conversation.component';

describe('LastConversationComponent', () => {
  let component: LastConversationComponent;
  let fixture: ComponentFixture<LastConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
