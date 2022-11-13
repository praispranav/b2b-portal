import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddTradeShowComponent } from './page-add-trade-show.component';

describe('PageAddTradeShowComponent', () => {
  let component: PageAddTradeShowComponent;
  let fixture: ComponentFixture<PageAddTradeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddTradeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddTradeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
