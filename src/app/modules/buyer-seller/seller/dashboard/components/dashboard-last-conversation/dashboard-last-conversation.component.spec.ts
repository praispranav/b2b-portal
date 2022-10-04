import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLastConversationComponent } from './dashboard-last-conversation.component';

describe('DashboardLastConversationComponent', () => {
  let component: DashboardLastConversationComponent;
  let fixture: ComponentFixture<DashboardLastConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLastConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLastConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
