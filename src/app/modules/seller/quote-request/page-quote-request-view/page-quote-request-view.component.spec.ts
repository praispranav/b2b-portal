import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuoteRequestViewComponent } from './page-quote-request-view.component';

describe('PageQuoteRequestViewComponent', () => {
  let component: PageQuoteRequestViewComponent;
  let fixture: ComponentFixture<PageQuoteRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuoteRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuoteRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
