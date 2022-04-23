import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChatBoxComponent } from './page-chat-box.component';

describe('PageChatBoxComponent', () => {
  let component: PageChatBoxComponent;
  let fixture: ComponentFixture<PageChatBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChatBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
