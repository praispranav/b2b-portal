import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSuggestionListComponent } from './page-suggestion-list.component';

describe('PageSuggestionListComponent', () => {
  let component: PageSuggestionListComponent;
  let fixture: ComponentFixture<PageSuggestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSuggestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSuggestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
