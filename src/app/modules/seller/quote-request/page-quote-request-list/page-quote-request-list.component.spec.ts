import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuoteRequestListComponent } from './page-quote-request-list.component';

describe('PageQuoteRequestListComponent', () => {
  let component: PageQuoteRequestListComponent;
  let fixture: ComponentFixture<PageQuoteRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuoteRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuoteRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
