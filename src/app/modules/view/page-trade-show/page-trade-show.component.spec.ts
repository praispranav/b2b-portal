import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTradeShowComponent } from './page-trade-show.component';

describe('PageTradeShowComponent', () => {
  let component: PageTradeShowComponent;
  let fixture: ComponentFixture<PageTradeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTradeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTradeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
