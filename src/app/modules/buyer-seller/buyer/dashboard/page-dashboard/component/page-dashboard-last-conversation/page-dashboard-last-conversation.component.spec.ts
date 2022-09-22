import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashboardLastConversationComponent } from './page-dashboard-last-conversation.component';

describe('PageDashboardLastConversationComponent', () => {
  let component: PageDashboardLastConversationComponent;
  let fixture: ComponentFixture<PageDashboardLastConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDashboardLastConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDashboardLastConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
