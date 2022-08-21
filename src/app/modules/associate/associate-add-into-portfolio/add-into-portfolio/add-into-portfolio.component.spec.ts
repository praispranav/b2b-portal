import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntoPortfolioComponent } from './add-into-portfolio.component';

describe('AddIntoPortfolioComponent', () => {
  let component: AddIntoPortfolioComponent;
  let fixture: ComponentFixture<AddIntoPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIntoPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIntoPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
