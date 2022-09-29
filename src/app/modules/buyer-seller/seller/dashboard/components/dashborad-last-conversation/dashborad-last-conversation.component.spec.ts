import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradLastConversationComponent } from './dashborad-last-conversation.component';

describe('DashboradLastConversationComponent', () => {
  let component: DashboradLastConversationComponent;
  let fixture: ComponentFixture<DashboradLastConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboradLastConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradLastConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
