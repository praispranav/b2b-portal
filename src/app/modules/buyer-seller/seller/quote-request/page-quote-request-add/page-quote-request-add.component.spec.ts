import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuoteRequestAddComponent } from './page-quote-request-add.component';

describe('PageQuoteRequestAddComponent', () => {
  let component: PageQuoteRequestAddComponent;
  let fixture: ComponentFixture<PageQuoteRequestAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageQuoteRequestAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQuoteRequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
