import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFlashDealsComponent } from './home-flash-deals.component';

describe('HomeFlashDealsComponent', () => {
  let component: HomeFlashDealsComponent;
  let fixture: ComponentFixture<HomeFlashDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFlashDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFlashDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
