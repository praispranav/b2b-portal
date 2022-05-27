import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRfqComponent } from './page-rfq.component';

describe('PageRfqComponent', () => {
  let component: PageRfqComponent;
  let fixture: ComponentFixture<PageRfqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRfqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
