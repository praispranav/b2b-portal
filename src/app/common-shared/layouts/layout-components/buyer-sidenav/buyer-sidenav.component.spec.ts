import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSidenavComponent } from './buyer-sidenav.component';

describe('BuyerSidenavComponent', () => {
  let component: BuyerSidenavComponent;
  let fixture: ComponentFixture<BuyerSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
