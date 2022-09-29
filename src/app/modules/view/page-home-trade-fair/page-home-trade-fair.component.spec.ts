import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeTradeFairComponent } from './page-home-trade-fair.component';

describe('PageHomeTradeFairComponent', () => {
  let component: PageHomeTradeFairComponent;
  let fixture: ComponentFixture<PageHomeTradeFairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeTradeFairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeTradeFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
