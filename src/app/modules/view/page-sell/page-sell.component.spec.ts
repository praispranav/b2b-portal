import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSellComponent } from './page-sell.component';

describe('PageSellComponent', () => {
  let component: PageSellComponent;
  let fixture: ComponentFixture<PageSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
