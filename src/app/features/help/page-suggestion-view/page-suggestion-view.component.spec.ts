import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSuggestionViewComponent } from './page-suggestion-view.component';

describe('PageSuggestionViewComponent', () => {
  let component: PageSuggestionViewComponent;
  let fixture: ComponentFixture<PageSuggestionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSuggestionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSuggestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
