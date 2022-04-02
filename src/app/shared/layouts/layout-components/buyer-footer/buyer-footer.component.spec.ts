import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerFooterComponent } from './buyer-footer.component';

describe('BuyerFooterComponent', () => {
  let component: BuyerFooterComponent;
  let fixture: ComponentFixture<BuyerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
