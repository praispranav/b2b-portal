import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSuggestionAddComponent } from './page-suggestion-add.component';

describe('PageSuggestionAddComponent', () => {
  let component: PageSuggestionAddComponent;
  let fixture: ComponentFixture<PageSuggestionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSuggestionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSuggestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
