import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTradeFairComponent } from './home-trade-fair.component';

describe('HomeTradeFairComponent', () => {
  let component: HomeTradeFairComponent;
  let fixture: ComponentFixture<HomeTradeFairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTradeFairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTradeFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
