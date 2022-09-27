import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOverStockComponent } from './page-over-stock.component';

describe('PageOverStockComponent', () => {
  let component: PageOverStockComponent;
  let fixture: ComponentFixture<PageOverStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOverStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOverStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
