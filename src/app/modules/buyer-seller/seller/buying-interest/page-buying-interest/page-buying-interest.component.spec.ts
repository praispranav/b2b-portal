import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuyingInterestComponent } from './page-buying-interest.component';

describe('PageBuyingInterestComponent', () => {
  let component: PageBuyingInterestComponent;
  let fixture: ComponentFixture<PageBuyingInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBuyingInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBuyingInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
